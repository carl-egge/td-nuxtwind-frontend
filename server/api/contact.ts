// server/api/contact.ts

// Import Node's fs for synchronous and promises-based functions
import fs, { promises as fsp } from 'fs';
// Import path to build file paths
import path from 'path';
// Import MailerSend and related types from the mailersend package
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
// Import email template functions from our abstraction file
import {
	getContactEmailText,
	getContactEmailHtml,
} from '../templates/contactEmail';

export default defineEventHandler(async (event) => {
	try {
		// Read the request body and extract necessary fields
		const body = await readBody(event);
		const { token, email, message } = body;
		let { name, phone } = body;

		// Check that required fields are provided; throw an error if they are missing
		if (!email || !message) {
			throw createError({
				statusCode: 422,
				statusMessage: 'E-Mail und Nachricht sind erforderlich.',
			});
		}

		// Set default values for optional fields if they are missing
		name = name || 'Unbekannter Absender';
		phone = phone || 'Keine Telefonnummer angegeben';

		// Retrieve API key and config values securely from runtime config
		const config = useRuntimeConfig();
		const apiKey = config.mailerSenderApiKey;

		// Check that the Turnstile token is provided
		if (!token) {
			throw createError({
				statusCode: 422,
				statusMessage: 'Serverfehler: Captcha Token fehlt.',
			});
		}

		// Check that the MailerSender API key is available
		if (!apiKey) {
			throw createError({
				statusCode: 422,
				statusMessage: 'Serverfehler: Mail Service API Key fehlt.',
			});
		}

		// If using mock data, log the data in the console and return a success response
		if (config.public.useMockData) {
			console.log(
				JSON.stringify({
					token: token,
					from: email,
					name: name,
					text: message,
					phone: phone,
					MailerSenderApiKey: apiKey,
					useMockData: config.public.useMockData,
					turnstileSecretKey: config.turnstile.secretKey,
				})
			);
			// Log a success message indicating the email was sent
			await logEmailActivity(
				`Mock Data: Email sent successfully to ${config.public.contactFormRecipient} and ${email}`
			);
			return {
				success: true,
				data: {
					message: 'Email sent successfully.',
				},
			};
		}

		// Verify the Turnstile token; catch and throw a custom error if verification fails
		let verificationResponse;
		try {
			verificationResponse = await verifyTurnstileToken(token);
		} catch (error) {
			console.error('Error verifying Turnstile token:', error);
			throw createError({
				statusCode: 422,
				statusMessage: 'Serverfehler: Captcha Verifizierung fehlgeschlagen.',
			});
		}
		if (!verificationResponse.success) {
			throw createError({
				statusCode: 422,
				statusMessage: 'Serverfehler: Captcha Verifizierung fehlgeschlagen.',
			});
		}

		// Initialize the MailerSend client using the API key from config
		const mailerSend = new MailerSend({ apiKey });

		// Create sender and recipient objects using renamed config variables (handled in your config file)
		const sentFrom = new Sender(
			config.public.contactFormFromEmail as string,
			config.public.contactFormFromName as string
		);
		const replyTo = new Sender(email, name);
		const recipients = [
			new Recipient(
				config.public.contactFormRecipient as string,
				config.public.contactFormRecipientName as string
			),
			new Recipient(email, name),
		];

		// Generate email content using the email template abstraction
		const textContent = getContactEmailText({ name, email, phone, message });
		const htmlContent = getContactEmailHtml({ name, email, phone, message });

		// Construct the email parameters with subject, text, and HTML content
		const emailParams = new EmailParams()
			.setFrom(sentFrom)
			.setTo(recipients)
			.setReplyTo(replyTo)
			.setSubject('Theaterdeck Kontaktformular')
			.setText(textContent)
			.setHtml(htmlContent);

		// Send the email using the MailerSender API
		const mailResponse = await mailerSend.email.send(emailParams);

		// Log a success message indicating the email was sent
		await logEmailActivity(
			`Email sent successfully to ${config.public.contactFormRecipient} and ${email}`
		);

		// Return a successful response to the client
		return { success: true, data: mailResponse };
	} catch (error: unknown) {
		// Log any errors that occur during the process
		const errorMessage = (error as Error).message || error;
		await logEmailActivity(`Error sending email: ${errorMessage}`);
		// Rethrow the error to be handled by Nuxt's error handling middleware
		throw error;
	}
});

// Helper function to log email activities to a file at logs/email.log
async function logEmailActivity(logMessage: string) {
	// Define the directory and file path for logging
	const logsDir = path.join(process.cwd(), 'logs');
	const logFilePath = path.join(logsDir, 'email.log');
	try {
		// Ensure the logs directory exists; create it if it doesn't
		if (!fs.existsSync(logsDir)) {
			await fsp.mkdir(logsDir, { recursive: true });
		}
		// Append a new log entry with a timestamp
		await fsp.appendFile(
			logFilePath,
			`${new Date().toISOString()} - ${logMessage}\n`
		);
	} catch (err) {
		// If logging fails, output the error to the console (but do not interrupt the main flow)
		console.error('Failed to write email log:', err);
	}
}

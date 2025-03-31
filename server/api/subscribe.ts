// server/api/subscribe.ts

// access mailchimp api
import mailchimp from '@mailchimp/mailchimp_marketing';
// Using crypto to hash the mail address
import { createHash } from 'crypto';
// Import Node's fs for synchronous and promises-based functions
import fs, { promises as fsp } from 'fs';
// Import path to build file paths
import path from 'path';

const config = useRuntimeConfig();

// Configure Mailchimp with your secure credentials
mailchimp.setConfig({
	apiKey: config.mailchimp.apiKey,
	server: config.mailchimp.serverPrefix,
});

export default defineEventHandler(async (event) => {
	// Parse the request body to get the subscriber's name and email.
	const body = await readBody<{
		forename: string;
		lastname: string;
		email: string;
	}>(event);
	const { forename, lastname, email } = body;

	if (!forename || !email) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Name and email are required.',
		});
	}

	// Compute the MD5 hash of the email (in lowercase) as required by Mailchimp
	const subscriberHash = createHash('md5')
		.update(email.toLowerCase())
		.digest('hex');
	const listId = config.mailchimp.audienceId;

	// Try to get the list member. If found, return an appropriate message.
	try {
		console.log('Checking Newsletter Subscription for email: ', email);
		const member = await mailchimp.lists.getListMember(listId, subscriberHash);
		// console.log('Response: ', member);
		// Log a success message indicating the subscriber was added
		await logSubscribeActivity(
			`Reject: Subscriber ${forename} ${lastname}<${email}> already exists.`
		);
		return {
			statusCode: 302,
			message: `Subscriber already exists with status: ${member.status}`,
			id: 'id' in member ? member.id : null,
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		// If the error indicates a 404, the member does not exist and we can add them.
		if (err.status === 404) {
			try {
				const response = await mailchimp.lists.addListMember(listId, {
					email_address: email,
					status: 'subscribed', // TODO: We should change this such that it requires email confirmation
					merge_fields: {
						FNAME: forename,
						LNAME: lastname,
					},
				});
				// Log a success message indicating the subscriber was added
				await logSubscribeActivity(
					`Added ${forename} ${lastname}<${email}> to the subscriber list.`
				);
				return {
					statusCode: 200,
					message: 'Successfully added contact as an audience member.',
					id: 'id' in response ? response.id : null,
				};
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				throw createError({
					statusCode: error.status || 500,
					statusMessage: error.message || 'Error adding subscriber.',
				});
			}
		} else {
			// For any other errors, pass them along.
			throw createError({
				statusCode: err.status || 500,
				statusMessage: err.message || 'Error checking subscriber status.',
			});
		}
	}
});

// Helper function to log subscribe activities to a file at logs/subscribe.log
async function logSubscribeActivity(logMessage: string) {
	// Define the directory and file path for logging
	const logsDir = path.join(process.cwd(), 'logs');
	const logFilePath = path.join(logsDir, 'subscribe.log');
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

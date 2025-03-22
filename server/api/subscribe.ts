// server/api/subscribe.ts

import mailchimp from '@mailchimp/mailchimp_marketing';
import { createHash } from 'crypto';

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
		console.log('Checking for user: ', email);
		const member = await mailchimp.lists.getListMember(listId, subscriberHash);
		console.log('Response: ', member);
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
					status: 'subscribed',
					merge_fields: {
						FNAME: forename,
						LNAME: lastname,
					},
				});
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

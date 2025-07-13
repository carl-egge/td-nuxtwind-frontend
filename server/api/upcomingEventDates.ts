type PretixEvent = {
	slug: string;
	name: { de: string; en: string };
	date_from: string;
	has_subevents: boolean;
	meta_data: { autor: string; zitat: string };
};

type PretixSubevent = {
	id: number;
	date_from: string;
	meta_data: { tag?: string };
};

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const uri = `${config.public.pretixLocalBaseUrl}${config.public.pretixApiEndpoint}`;
	console.log('INFO : Fetching events from', uri);

	const now = new Date().toISOString();
	const headers = {
		Authorization: `Token ${config.pretixApiKey}`,
		Accept: 'application/json',
	};

	const result: {
		type: 'event' | 'subevent';
		event_slug: string;
		name: string;
		date_from: string;
		autor: string;
		tag?: string;
	}[] = [];

	try {
		// 1. Fetch all events
		// We can add &live=true to only get live events
		let nextUrl = `${uri}/events/?ordering=date_from&date_after=${now}&fields=slug,name,date_from,has_subevents,meta_data`;

		while (nextUrl) {
			const res = await fetch(nextUrl, { headers });
			if (!res.ok) throw new Error(`Failed to fetch events: ${res.status}`);

			const data = await res.json();
			for (const evt of data.results as PretixEvent[]) {
				const eventName = evt.name.de || evt.name.en;
				const eventAutor = evt.meta_data?.autor || '';

				if (!evt.has_subevents) {
					// Simple event
					result.push({
						type: 'event',
						event_slug: evt.slug,
						name: eventName,
						date_from: evt.date_from,
						autor: eventAutor,
					});
				} else {
					// 2. Fetch subevents for events with has_subevents = true
					let subNextUrl = `${uri}/events/${evt.slug}/subevents/?date_after=${now}&ordering=date_from&fields=id,name,date_from, meta_data`;
					while (subNextUrl) {
						const subRes = await fetch(subNextUrl, { headers });
						if (!subRes.ok)
							throw new Error(`Failed to fetch subevents for ${evt.slug}`);
						const subData = await subRes.json();

						for (const sub of subData.results as PretixSubevent[]) {
							result.push({
								type: 'subevent',
								event_slug: evt.slug,
								name: eventName, // <- use event name, not subevent name
								date_from: sub.date_from,
								autor: eventAutor,
								tag: sub.meta_data.tag,
							});
						}

						subNextUrl = subData.next;
					}
				}
			}

			nextUrl = data.next;
		}

		// Sort chronologically
		result.sort(
			(a, b) =>
				new Date(a.date_from).getTime() - new Date(b.date_from).getTime()
		);

		return result;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		console.error('Error fetching events from Pretix:', err);
		return sendError(
			event,
			createError({
				statusCode: 500,
				message: 'Failed to load upcoming events.',
			})
		);
	}
});

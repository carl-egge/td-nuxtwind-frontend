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
		subeventId?: number;
		soldOut: boolean;
		availableTotal?: number;
	}[] = [];

	try {
		// 1. Fetch all events
		// We can add &live=true to only get live events
		let nextUrl = `${uri}/events/?ordering=date_from&date_after=${now}&live=true&fields=slug,name,date_from,has_subevents,meta_data`;

		while (nextUrl) {
			const res = await fetch(nextUrl, { headers });
			if (!res.ok) throw new Error(`Failed to fetch events: ${res.status}`);

			const data = await res.json();
			for (const evt of data.results as PretixEvent[]) {
				const eventName = evt.name.de || evt.name.en;
				const eventAutor = evt.meta_data?.autor || '';

				if (!evt.has_subevents) {
					// Simple event
					const { soldOut, availableTotal } = await getSoldOut({
						baseUri: config.public.pretixLocalBaseUrl,
						organizer: 'td',
						event: evt.slug,
						headers,
					});
					result.push({
						type: 'event',
						event_slug: evt.slug,
						name: eventName,
						date_from: evt.date_from,
						autor: eventAutor,
						soldOut,
						availableTotal: Number.isFinite(availableTotal)
							? availableTotal
							: undefined,
					});
				} else {
					// 2. Fetch subevents for events with has_subevents = true
					let subNextUrl = `${uri}/events/${evt.slug}/subevents/?date_after=${now}&active=true&ordering=date_from&fields=id,name,date_from,meta_data`;
					while (subNextUrl) {
						const subRes = await fetch(subNextUrl, { headers });
						if (!subRes.ok)
							throw new Error(`Failed to fetch subevents for ${evt.slug}`);
						const subData = await subRes.json();

						for (const sub of subData.results as PretixSubevent[]) {
							const { soldOut, availableTotal } = await getSoldOut({
								baseUri: config.public.pretixLocalBaseUrl,
								organizer: 'td',
								event: evt.slug,
								headers,
								subeventId: sub.id,
							});
							result.push({
								type: 'subevent',
								event_slug: evt.slug,
								name: eventName, // <- use event name, not subevent name
								date_from: sub.date_from,
								autor: eventAutor,
								tag: sub.meta_data.tag,
								subeventId: sub.id,
								soldOut,
								availableTotal: Number.isFinite(availableTotal)
									? availableTotal
									: undefined,
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

// Helper function to fetch quota availability and determine sold out status
type PretixQuota = {
	id: number;
	name: string;
	size: number | null;
	items: number[];
	variations: number[];
	subevent: number | null;
	close_when_sold_out: boolean;
	closed: boolean;
	ignore_for_event_availability?: boolean;
	// Only present if with_availability=true
	available?: boolean;
	available_number?: number | null;
};

async function getSoldOut(opts: {
	baseUri: string;
	organizer: string;
	event: string;
	headers: Record<string, string>;
	subeventId?: number;
}): Promise<{ soldOut: boolean; availableTotal: number }> {
	const { baseUri, organizer, event, headers, subeventId } = opts;

	// Build initial URL (pagination supported via "next")
	let url =
		`${baseUri}/api/v1/organizers/${encodeURIComponent(organizer)}` +
		`/events/${encodeURIComponent(event)}/quotas/?with_availability=true` +
		(subeventId !== null && subeventId !== undefined
			? `&subevent=${subeventId}`
			: '');

	let anyUnlimited = false;
	let availableTotal = 0;
	let considered = 0;

	while (url) {
		const res = await fetch(url, { headers });
		if (!res.ok) {
			throw new Error(
				`Failed to fetch quotas (availability) for ${organizer}/${event}` +
					(subeventId !== null && subeventId !== undefined
						? ` subevent ${subeventId}`
						: '') +
					`: ${res.status} ${res.statusText}`
			);
		}

		const page: {
			count: number;
			next: string | null;
			previous: string | null;
			results: PretixQuota[];
		} = await res.json();

		for (const q of page.results) {
			// New since 2025.7; default to false if missing on older servers
			const ignored = q.ignore_for_event_availability === true;
			if (ignored) continue;

			// Closed quotas do not provide sellable capacity
			if (q.closed) continue;

			considered++;

			// Prefer available_number if present; fall back to available boolean
			// Docs note values may be slightly out of date, which is OK for UI.
			if (Object.prototype.hasOwnProperty.call(q, 'available_number')) {
				if (q.available_number === null) {
					// Unlimited => definitely *not* sold out
					anyUnlimited = true;
				} else {
					availableTotal += Math.max(0, q.available_number!);
				}
			} else if (Object.prototype.hasOwnProperty.call(q, 'available')) {
				// If only the boolean is present, treat true as >=1 available
				if (q.available) availableTotal += 1;
			} else {
				// Extremely old/odd response: treat as unknown, don’t count
			}
		}

		url = page.next ?? '';
	}

	// If there are unlimited quotas, event is not sold out.
	// Otherwise sold out iff the summed availability is 0 across all considered quotas.
	const soldOut = !anyUnlimited && considered > 0 && availableTotal === 0;

	// Represent unlimited capacity as Infinity for convenience
	return {
		soldOut,
		availableTotal: anyUnlimited ? Number.POSITIVE_INFINITY : availableTotal,
	};
}

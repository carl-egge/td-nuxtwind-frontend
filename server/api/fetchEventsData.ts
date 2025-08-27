// fetchEventsData.ts
export default defineEventHandler(async () => {
	const config = useRuntimeConfig();
	const base = `${config.public.pretixLocalBaseUrl}${config.public.pretixApiEndpoint}`;

	// 1. Fetch the list of events
	const eventsRes = await fetch(`${base}/events/`, {
		headers: { Authorization: `Token ${config.pretixApiKey}` },
	});
	if (!eventsRes.ok) {
		const txt = await eventsRes.text().catch(() => '[non-text response]');
		console.error('Pretix API error body:', txt);
		throw createError({
			statusCode: eventsRes.status,
			statusMessage: `Fetching events failed: ${eventsRes.status}`,
		});
	}
	const eventsData = await eventsRes.json();
	if (!Array.isArray(eventsData.results)) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Invalid events payload',
		});
	}

	// 2. For each event, fetch its settings and products in parallel
	const eventsWithSettings = await Promise.all(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		eventsData.results.map(async (ev: any) => {
			try {
				// get event settings
				const settRes = await fetch(`${base}/events/${ev.slug}/settings`, {
					headers: { Authorization: `Token ${config.pretixApiKey}` },
				});
				if (!settRes.ok) {
					console.warn(
						`Could not fetch settings for ${ev.slug}:`,
						settRes.status
					);
					// fallback to empty defaults
					return {
						...ev,
						frontpage_text: { de: '' },
						event_info_text: { de: '' },
						logo_image: '',
						og_image: null,
					};
				}
				const settings = await settRes.json();
				// get event items
				const itemsRes = await fetch(`${base}/events/${ev.slug}/items`, {
					headers: { Authorization: `Token ${config.pretixApiKey}` },
				});
				if (!itemsRes.ok) {
					console.warn(
						`Could not fetch items for ${ev.slug}:`,
						itemsRes.status
					);
					// fallback to empty defaults
					return {
						...ev,
						items: [
							{
								id: null,
								name: { de: 'Normalpreis' },
								default_price: 17,
							},
							{
								id: null,
								name: { de: 'Ermäßigt' },
								default_price: 11,
							},
						],
					};
				}
				// consolidate items
				const items = await itemsRes.json();
				const consolidatedItems = items.results.reduce(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(acc: unknown[], item: any) => {
						acc.push({
							id: item.id,
							name: item.name,
							default_price: item.default_price,
						});
						return acc;
					},
					[]
				);
				// merge the four desired fields
				return {
					...ev,
					frontpage_text: settings.frontpage_text,
					event_info_text: settings.event_info_text,
					logo_image: settings.logo_image,
					og_image: settings.og_image,
					items: consolidatedItems,
				};
			} catch (e) {
				console.error(`Error loading settings for ${ev.slug}:`, e);
				return {
					...ev,
					frontpage_text: { de: '' },
					event_info_text: { de: '' },
					logo_image: '',
					og_image: null,
					items: [
						{
							id: null,
							name: { de: 'Normalpreis' },
							default_price: 17,
						},
						{
							id: null,
							name: { de: 'Ermäßigt' },
							default_price: 11,
						},
					],
				};
			}
		})
	);

	return { events: eventsWithSettings, error: null };
});

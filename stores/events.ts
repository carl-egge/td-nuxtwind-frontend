// TODO: Maybe use Pinia Setup Store
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineStore } from 'pinia';
import eventTestData from '~/assets/mocks/events.json';

export const useEventsStore = defineStore('events', {
	state: () => ({
		events: [] as APIEvent[],
		isLoading: false,
		error: null as string | null,
	}),

	getters: {
		// Return all events
		getAllEvents: (state): APIEvent[] => state.events,

		// Return the total number of events
		getEventCount: (state): number => state.events.length,

		// Find and return an event by its slug
		getEventBySlug:
			(state) =>
			(slug: string): APIEvent | undefined =>
				state.events.find((event) => event.slug === slug),

		// Filter and return live upcoming events
		getLiveUpcomingEvents: (state): APIEvent[] =>
			state.events.filter(
				(event) =>
					// !event.testmode && // TODO: Exclude test mode events
					event.live && new Date(event.date_from) >= new Date()
			),
	},

	actions: {
		// Add valid events to the store
		setEvents(events: APIEvent[]): void {
			this.events = events;
		},

		// Set the loading state
		setLoading(isLoading: boolean): void {
			this.isLoading = isLoading;
		},

		// Set an error message
		setError(error: string | null): void {
			this.error = error;
		},

		// Fetch events from Server Side using the Nuxt API
		// If true is returned, the fetch was successful, otherwise an error occurred and false is returned
		async fetchEvents() {
			this.setLoading(true);
			this.setError(null);
			try {
				const { events, error } = await $fetch<{
					events: unknown[];
					error: { statusCode: number; statusMessage: string } | null;
				}>('/api/fetchEventsData');
				if (error) {
					throw createError({
						statusCode: error.statusCode,
						statusMessage: error.statusMessage,
					});
				}
				this.setEvents(events as APIEvent[]);
				return true;
			} catch (err) {
				console.error('Error fetching events:', err);
				this.setError(
					err instanceof Error ? err.message : 'An unknown error occurred'
				);
				this.setEvents([]);
				return false;
			} finally {
				this.setLoading(false);
			}
		},

		// Fetch test events from mock data for testing purpose
		async fetchTestEvents(): Promise<void> {
			this.isLoading = true;
			this.error = null;
			try {
				console.log('INFO : Using mock data for events');
				// Validate and store each event from the test data
				this.events = eventTestData.results || [];
			} catch (error) {
				console.error('Error handling mock events data:', error);
				this.error =
					error instanceof Error ? error.message : 'An unknown error occurred';
				this.events = [];
			} finally {
				this.isLoading = false;
			}
		},

		// Clear all events from the store
		clearEvents(): void {
			this.events = [];
		},
	},
});

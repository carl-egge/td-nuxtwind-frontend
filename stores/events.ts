import { defineStore } from "pinia";
import { useFetch } from "#app";
import { useRuntimeConfig } from "#imports";
import eventTestData from "~/assets/mocks/events.json";

// Define a type for multilingual fields
type MultilingualField = {
	de: string;
	[key: string]: string | undefined;
};

// Define the structure for partial event data from the API
interface PartialAPIEvent {
	name: MultilingualField;
	slug: string;
	desc: MultilingualField;
	live: boolean;
	testmode: boolean;
	currency: string;
	date_from: string;
	date_to: string;
	[key: string]: unknown; // Allow additional properties
}

export const useEventsStore = defineStore("events", {
	state: () => ({
		events: [] as PartialAPIEvent[],
		isLoading: false,
		error: null as string | null,
	}),

	getters: {
		// Return all events
		getAllEvents: (state): PartialAPIEvent[] => state.events,

		// Return the total number of events
		getEventCount: (state): number => state.events.length,

		// Find and return an event by its slug
		getEventBySlug:
			(state) =>
			(slug: string): PartialAPIEvent | undefined =>
				state.events.find((event) => event.slug === slug),

		// Filter and return live upcoming events
		getLiveUpcomingEvents: (state): PartialAPIEvent[] =>
			state.events.filter(
				(event) => event.live && new Date(event.date_from) >= new Date()
			),
	},

	actions: {
		// Fetch events from the API
		async fetchEvents(): Promise<void> {
			this.isLoading = true;
			this.error = null;
			const config = useRuntimeConfig();
			const uri = `${config.public.pretixLocalBaseUrl}${config.public.pretixEndpoint}/events`;

			try {
				const { data, error } = await useFetch<{ results: PartialAPIEvent[] }>(
					uri,
					{
						headers: { Authorization: `Token ${config.public.pretixApiKey}` },
					}
				);

				if (error.value) {
					throw new Error(error.value.message);
				}

				if (data.value?.results) {
					// Validate and store each event
					this.events = data.value.results.filter(this.isValidEvent);
				} else {
					throw new Error("No data received from the API");
				}
			} catch (error) {
				console.error("Error fetching events:", error);
				this.error =
					error instanceof Error ? error.message : "An unknown error occurred";
				this.events = [];
			} finally {
				this.isLoading = false;
			}
		},

		// Fetch test events from mock data
		async fetchTestEvents(): Promise<void> {
			this.isLoading = true;
			this.error = null;

			try {
				console.log("INFO : Using mock data for events");
				// Validate and store each event from the test data
				this.events = (eventTestData.results || []).filter(this.isValidEvent);
			} catch (error) {
				console.error("Error handling mock events data:", error);
				this.error =
					error instanceof Error ? error.message : "An unknown error occurred";
				this.events = [];
			} finally {
				this.isLoading = false;
			}
		},

		// Clear all events from the store
		clearEvents(): void {
			this.events = [];
		},

		// Helper method to validate event structure
		isValidEvent(event: unknown): event is PartialAPIEvent {
			if (typeof event !== "object" || event === null) {
				return false;
			}

			const e = event as Record<string, unknown>;
			// Check if all required properties exist and have the correct types
			return (
				typeof e.name === "object" &&
				e.name !== null &&
				typeof (e.name as MultilingualField).de === "string" &&
				typeof e.slug === "string" &&
				typeof e.desc === "object" &&
				e.desc !== null &&
				typeof (e.desc as MultilingualField).de === "string" &&
				typeof e.live === "boolean" &&
				typeof e.testmode === "boolean" &&
				typeof e.currency === "string" &&
				typeof e.date_from === "string" &&
				typeof e.date_to === "string"
			);
		},
	},
});

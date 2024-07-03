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
	date_from: string; // API returns dates as strings
	date_to: string; // API returns dates as strings
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

// "results": [
// 	{
// 		"name": { "en": "Erste Test Veranstaltung" },
// 		"desc": { "de": "Hier ist die Beschreibung" },
// 		"slug": "erster-test",
// 		"live": false,
// 		"testmode": true,
// 		"currency": "EUR",
// 		"date_from": "2023-06-01T00:17:00+02:00",
// 		"date_to": "2023-06-01T00:19:00+02:00",
// 		"date_admission": null,
// 		"is_public": true,
// 		"presale_start": null,
// 		"presale_end": null,
// 		"location": { "en": "Maurienstra\u00dfe 23" },
// 		"geo_lat": 53.5830142,
// 		"geo_lon": 10.0443866,
// 		"has_subevents": false,
// 		"meta_data": {},
// 		"seating_plan": null,
// 		"plugins": [
// 			"pretix.plugins.banktransfer",
// 			"pretix.plugins.paypal2",
// 			"pretix.plugins.reports",
// 			"pretix.plugins.sendmail",
// 			"pretix.plugins.statistics",
// 			"pretix.plugins.stripe",
// 			"pretix.plugins.ticketoutputpdf",
// 			"pretix_passbook",
// 			"pretix_sepadebit"
// 		],
// 		"seat_category_mapping": {},
// 		"timezone": "Europe/Berlin",
// 		"item_meta_properties": {},
// 		"sales_channels": ["web", "resellers", "pretixpos"],
// 		"public_url": "https://pretix.eu/carl-egge-test/erster-test/"
// 	}
// ]

// import { defineStore } from 'pinia';
// import eventTestData from '~/public/mocks/events.json';

// /**
//  * EventAPIData
//  * this interface mirrors the output of the pretix API
//  */
// export interface EventAPIData {
//   name:                  object;
//   slug:                  string;
//   desc:                  object;
//   live:                  boolean;
//   testmode:              boolean;
//   currency:              string;
//   date_from:             Date;
//   date_to:               Date;
//   date_admission:        null;
//   is_public:             boolean;
//   presale_start:         null;
//   presale_end:           null;
//   location:              object;
//   geo_lat:               null;
//   geo_lon:               null;
//   has_subevents:         boolean;
//   meta_data:             object;
//   seating_plan:          null;
//   plugins:               string[];
//   seat_category_mapping: object;
//   timezone:              string;
//   item_meta_properties:  object;
//   sales_channels:        string[];
//   public_url:            string;
//   // [key: string]:         any;
// }

// /**
//  * This store return the events from the pretix API
//  * @see https://docs.pretix.eu/en/latest/api/resources/events.html
//  */
// export const useEventsStore = defineStore({
//   id: 'events',

//   state: () => ({
//     events: [] as EventAPIData[],
//   }),

//   getters: {
//     /**
//      * getAll
//      * @returns {EventAPIData[]} All events in the store
//      */
//     getAll: (state): EventAPIData[] => {
//       return state.events;
//     },

//     /**
//      * countEvents
//      * @returns {number} The number of events in the store
//      */
//     countEvents: (state): number => {
//       return state.events.length;
//     },

//     /**
//      * getEventBySlug
//      * @param {object} state The state of the store
//      * @returns {function} A function that returns the event object by slug
//      */
//     getEventBySlug: (state) => {
//       return (slug: string) => state.events.find((event) => event['slug'] === slug)
//     },
//   },

//   actions: {
//     /**
//      * fetchEvents
//      * Fetches all events from the pretix API and stores them in the state
//      *
//      * TODO: Add filter to only get live and upcoming events
//      * TODO: Catch Errors such that the app does not crash
//      */
//     async fetchEvents(): Promise<void> {
//       const config = useRuntimeConfig();
//       const uri = config.public.pretixLocalBaseUrl + config.public.pretixEndpoint + "/events"
//       console.log("Now fetching events from: ", uri);
//       const { data, error }: any = await useFetch(uri, {
//         headers: { Authorization: "Token " + config.public.pretixApiKey },
//       });
//       if (error.value) {
//         console.log("Error fetch Events: ", error.value)
//         this.events = [];
//         // throw createError({statusCode: 404, statusMessage: "Page not found.", fatal: true})
//       } else if (data.value) {
//         this.events = data.value.results;
//       } else {
//         this.events = [];
//       }
//     },

//     /**
//      * fetchTestEvents
//      * fetch event data from mock file for local development without backend api
//      */
//     async fetchTestEvents(): Promise<void> {
//       try {
//         console.log("Now using mock data for events");
//         // Directly use imported JSON data
//         this.events = eventTestData.results || [];
//       } catch (error) {
//         console.error("Error handling events data: ", error.message);
//         this.events = [];
//       }
//     }
//   }
// });

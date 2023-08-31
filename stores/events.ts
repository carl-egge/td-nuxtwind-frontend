import { defineStore } from 'pinia';

/**
 * EventAPIData
 * this interface mirrors the output of the pretix API
 */
export interface EventAPIData {
  name:                  object;
  slug:                  string;
  desc:                  object;
  live:                  boolean;
  testmode:              boolean;
  currency:              string;
  date_from:             Date;
  date_to:               Date;
  date_admission:        null;
  is_public:             boolean;
  presale_start:         null;
  presale_end:           null;
  location:              object;
  geo_lat:               null;
  geo_lon:               null;
  has_subevents:         boolean;
  meta_data:             object;
  seating_plan:          null;
  plugins:               string[];
  seat_category_mapping: object;
  timezone:              string;
  item_meta_properties:  object;
  sales_channels:        string[];
  public_url:            string;
  // [key: string]:         any;
}

/**
 * This store return the events from the pretix API
 * @see https://docs.pretix.eu/en/latest/api/resources/events.html 
 */
export const useEventsStore = defineStore({
  id: 'events',

  state: () => ({
    events: [] as EventAPIData[],
  }),

  getters: {
    /**
     * getAll
     * @returns {EventAPIData[]} All events in the store
     */
    getAll: (state): EventAPIData[] => {
      return state.events;
    },

    /**
     * countEvents
     * @returns {number} The number of events in the store
     */
    countEvents: (state): number => {
      return state.events.length;
    },

    /**
     * getEventBySlug
     * @param {object} state The state of the store
     * @returns {function} A function that returns the event object by slug
     */
    getEventBySlug: (state) => {
      return (slug: string) => state.events.find((event) => event['slug'] === slug)
    },
  },

  actions: {
    /**
     * fetchEvents
     * Fetches all events from the pretix API and stores them in the state
     * 
     * TODO: Add filter to only get live and upcoming events
     * TODO: Catch Errors such that the app does not crash
     */
    async fetchEvents(): Promise<void> {
      const config = useRuntimeConfig();
      const uri = config.public.pretixBaseUrl + config.public.pretixEndpoint + "/events"
      console.log("Now fetching events from: ", uri);
      const { data, error }: any = await useFetch(uri, {
        headers: { Authorization: "Token " + config.public.pretixApiKey },
      });
      if (error.value) {
        console.log("Error fetch Events: ", error.value)
        this.events = [];
        // throw createError({statusCode: 404, statusMessage: "Page not found.", fatal: true})     
      } else if (data.value) {
        this.events = data.value.results;
      } else {
        this.events = [];
      }
    },
  }
});
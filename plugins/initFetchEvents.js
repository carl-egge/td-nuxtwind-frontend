// ~/plugins/initFetchEvents.js

// This plugin will be called on the server side only
// It will initiate the fetchEvents action in the store

import { useEventsStore } from '~/stores/events'

export default defineNuxtPlugin((nuxtApp) => {
    // Make sure to only fetch events on the server
    if (process.server) {
        const eventsStore = useEventsStore()
        // eventsStore.fetchEvents()
        // Testing
        eventsStore.fetchTestEvents()
    }
});
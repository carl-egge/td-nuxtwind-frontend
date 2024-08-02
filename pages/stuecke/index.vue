<template>
    <div>
        <PageHero title="SpielPLAN" :breadcrumbs="[
            { label: 'HOME', to: '/' },
        ]" :backgroundImage="`url(${heroimage})`" />
        <main>
            <!-- TODO: Change this to eventsStore.getAllLiveandUpcomingEvents -->
            <h2 class="sr-only">Unsere Veranstaltungen</h2>
            <div class="bg-accent p-4 m-4 w-full rounded">
                <div>
                    <h2>Testing List of Events</h2>
                    <UButton @click="refreshEvents" :disabled="eventsStore.isLoading" block>
                        Refresh Events
                    </UButton>
                    <p v-if="eventsStore.isLoading">Loading...</p>
                    <p v-if="eventsStore.error">Error: {{ eventsStore.error }}</p>
                    <ul v-if="!eventsStore.isLoading && !eventsStore.error">
                        <li v-for="event in eventsStore.getAllEvents" :key="event.slug">
                            {{ event.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="eventsStore.getEventCount > 0" v-for="event in eventsStore.getAllEvents">
                <EventCard :event="event" />
            </div>
            <div v-else>
                <p> Bitte entschuldige. Wir konnten keine Veranstaltungen finden. </p>
                <UButton class="td-primary my-6">
                    <a href="/stuecke"> Erneut Versuchen </a>
                </UButton>
            </div>
        </main>
        <Newsletter />
    </div>
</template>

<script setup lang="ts">
/**
 * PAGE: stuecke/index.vue
 *
 * Landing Page for the Shows: Spielplan.
 */

import heroimage from "../assets/images/hero-highkey-windschief.jpg";

import { onMounted } from 'vue'
import { useEventsStore } from '~/stores/events'

const eventsStore = useEventsStore()

onMounted(() => {
    eventsStore.fetchEvents()
})

const refreshEvents = () => {
    eventsStore.fetchEvents()
}
</script>

<style scoped></style>
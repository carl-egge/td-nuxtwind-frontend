<template>
    <div>
        <PageHero title="SpielPLAN" :breadcrumbs="[
            { label: 'HOME', to: '/' },
        ]" :backgroundImage="`url(${heroimage})`" />
        <main>
            <!-- TODO: Change this to eventsStore.getAllLiveandUpcomingEvents -->
            <h2 class="sr-only">Unsere Veranstaltungen</h2>
            <div v-if="eventsStore.isLoading">
                <UProgress animation="carousel" />
                <p>
                    Veranstaltungen werden geladen. Bitte warten.
                </p>
            </div>
            <div v-if="!eventsStore.isLoading && !eventsStore.error && eventsStore.getEventCount > 0">
                <div v-for="event in eventsStore.getAllEvents">
                    <EventCard :event="event" />
                </div>
            </div>
            <div v-else>
                <h3>
                    Bitte entschuldige. Wir konnten keine Veranstaltungen finden.
                </h3>
                <!-- <UButton class="td-primary my-6">
                    <a href="/stuecke"> Erneut Versuchen </a>
                </UButton> -->
            </div>
            <div v-if="eventsStore.error" class="p-2 my-2 rounded w-full bg-red-500">
                <p class="text-background">
                    Fehler beim Veranstaltungen laden: "{{ eventsStore.error }}"
                </p>
            </div>
            <UButton @click="refreshEvents" :disabled="eventsStore.isLoading" block>
                Erneut Versuchen
            </UButton>
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
    // eventsStore.fetchEvents()
    eventsStore.fetchTestEvents()
})

const refreshEvents = () => {
    eventsStore.fetchEvents()
}
</script>

<style scoped></style>
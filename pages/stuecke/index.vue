<template>
    <div>
        <PageHero title="SpielPLAN" :breadcrumbs="[
            { label: 'HOME', to: '/' },
        ]" :backgroundImage="`url(${heroimage})`" />
        <main>
            <!-- TODO: Change this to eventsStore.getAllLiveandUpcomingEvents -->
            <h2 class="sr-only">Unsere Veranstaltungen</h2>
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

import { useEventsStore } from '~/stores/events';
const eventsStore = useEventsStore();
import heroimage from "../assets/images/hero-highkey-windschief.jpg";
</script>

<style scoped></style>
<template>
    <div>
        <Hero title="Programm" breadcrumb="home" />
        <div class="mx-auto max-w-5xl px-4 my-10">
            <div v-if="eventsStore.countEvents > 0" v-for="event in eventsStore.getAll">
                <EventCard :event="event" />
            </div>
            <div v-else class="text-center">
                <p class="my-6">Keine Events gefunden</p>
                <button class="my-4">
                    <a href="/stuecke"> Erneut Versuchen </a>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * PAGE: stuecke/index.vue
 *
 * Landing Page for the Shows: Programm.
 */

import { useEventsStore } from '~/stores/events';
const eventsStore = useEventsStore();
</script>

<style scoped></style>
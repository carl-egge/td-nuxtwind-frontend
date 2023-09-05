<template>
    <div>
        <Hero title="Programm" breadcrumb="home" />
        <div class="mx-auto max-w-5xl px-4 my-10">
            <div v-if="eventsStore.countEvents > 0" v-for="event in eventsStore.getAll">
                <EventCard :event="event" />
            </div>
            <div v-else class="text-center">
                <Icon name="mdi:dots-horizontal" class="h-8 w-8 text-gray-500" aria-hidden="true" />
                <h2 class="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    404
                </h2>
                <p class="my-6">
                    Leider konnten wir keine Veranstaltungen finden. Dies kann an einem Serverfehler liegen oder daran, dass
                    momentan keine Stücke anstehen.
                </p>
                <button class="td-btn-primary my-6">
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
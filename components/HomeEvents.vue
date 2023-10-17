<template>
    <section id="home-events">
        <div class="mx-auto max-w-7xl p-4 sm:p-8 lg:max-w-7xl">
            <h2 class="sr-only">Veranstaltungen</h2>
            <!-- <h2 class="text-center text-4xl">Unsere Veranstaltungen</h2> -->
            <div v-if="eventsStore.countEvents > 0" v-for="event in eventsStore.getAll">
                <EventCard :event="event" />
            </div>
            <div v-else>
                <p> Hups, hier fehlen die events.</p>
            </div>
        </div>
    </section>
</template>
  
<script setup>

import { useEventsStore } from '~/stores/events';
const eventsStore = useEventsStore();

</script>
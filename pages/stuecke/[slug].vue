<template>
    <div>
        <Hero :title="event.name.de" breadcrumb="show" :backgroundimage="`url(${heroimage})`" />
        <div class="mx-auto max-w-7xl p-4 sm:p-8 lg:max-w-7xl">
            <!-- Infos -->
            <section class="my-8 flex flex-row gap-x-8">
                <div v-if="event.picture" class="basis-1/3">
                    <img :src="switchBaseUrl(event.picture)" :alt="'Bild: ' + event.name.de" class="rounded-lg" />
                </div>
                <div :class="{ 'basis-2/3': event.picture }">
                    <h2 class="mt-6 mb-2 text-2xl font-bold tracking-tight text-td-accent">
                        AUTOR / TAG LINE
                    </h2>
                    <p class="my-4">
                        {{ event.desc.de }}
                    </p>
                    <hr class="my-12 mx-32 h-0.5 border-t-0 bg-td-primary opacity-100 dark:opacity-50" />
                    <p class="my-8">
                        EMPFOHLEN AB 4 JAHREN | Eintritt: 16 € - 10 € ermässigt | Gruppen ab 12 Personen 1 Euro erm. pro
                        Platz | Eine THEATERDECK Produktion in Kooperation mit der Theater Jugend Hamburg e.V. und dem Amt
                        für Familie | Die Rechte liegen beim Verlag für Kindertheater Weitendorf GmbH
                    </p>
                </div>
            </section>
            <!-- <section class="my-8">
                <h2 class="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Termine
                </h2>
                <p>
                    {{ formatDate(event['date_from']) }} - {{ formatDate(event['date_to']) }}
                </p>
            </section> -->

            <!-- pretix widget -->
            <section class="bg-white">
                <div class="pretix-widget-compat" :event="eventURI"></div>
                <ClientOnly>
                    <noscript>
                        <div class="pretix-widget">
                            <div class="pretix-widget-info-message">
                                JavaScript is disabled in your browser. To access our ticket shop without JavaScript,
                                please <a target="_blank" :href="eventURI">click here</a>.
                            </div>
                        </div>
                    </noscript>
                </ClientOnly>
            </section>
        </div>
    </div>
</template>
  
<script setup>
/**
 * PAGE: /stuecke/[slug]
 * 
 * This page shows a single event and the ticket shop
 */

import { storeToRefs } from 'pinia'
import { useEventsStore } from '~/stores/events';
import { onUnmounted } from 'vue'

import heroimage from "../assets/images/hero-highkey-chairs.jpg";

const { formatDate } = useFormatDate()
const { switchBaseUrl } = useAPIBaseUrl()
const { slug } = useRoute().params;
const config = useRuntimeConfig()
const eventURI = config.public.pretixBaseUrl + '/td/' + slug + '/';
const pretixWidgetCSSURI = eventURI + 'widget/v1.css';

// Get the event from the store
const eventsStore = useEventsStore();
const { getEventBySlug } = storeToRefs(eventsStore)
const event = getEventBySlug.value(slug)

// TODO: vue internal error? fix this
if (event === undefined) {
    throw createError({ statusCode: 404, statusMessage: 'Event not found' });
}

// include pretix widget script in DOM
if (process.client) {
    let pretixScript = document.createElement('script')
    pretixScript.setAttribute('src', config.public.pretixBaseUrl + '/widget/v1.de.js')
    document.head.appendChild(pretixScript)
}

// TODO: Fix Exclamation mark on bottom of page after leaving event page
onUnmounted(() => {
    // remove pretix widget script from DOM
    if (process.client) {
        // let pretixScript = document.querySelector('script[src="' + config.public.pretixBaseUrl + '/widget/v1.de.js"]')
        // pretixScript.remove()
        // TODO: get pretix overlay div and remove it
        let pretixOverlay = document.querySelector('div.pretix-widget-alert-holder')
        // Test: Add css class 'bg-red-500'
        // pretixOverlay.classList.add('bg-red-500')
        pretixOverlay.remove()
    }
})

// include pretix widget css in head
useHead({
    link: [
        { rel: 'preconnect', href: config.public.pretixBaseUrl },
        { rel: 'stylesheet', href: pretixWidgetCSSURI }
    ]
})
</script>
  
<style scoped></style>
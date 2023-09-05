<template>
    <div>
        <Hero :title="event.name.de" breadcrumb="show" />
        <div class="mx-auto max-w-5xl px-4 my-10 min-h-[30vh]">
            <!-- Infos -->
            <section class="my-8">
                <h2 class="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Beschreibung
                </h2>
                <p>
                    {{ event.desc.de }}
                </p>
            </section>
            <section class="my-8">
                <h2 class="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Termine
                </h2>
                <p>
                    {{ formatDate(event['date_from']) }} - {{ formatDate(event['date_to']) }}
                </p>
            </section>

            <!-- pretix widget -->
            <section>
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

const { formatDate } = useFormatDate()
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

// include pretix widget css in head
useHead({
    link: [
        { rel: 'preconnect', href: config.public.pretixBaseUrl },
        { rel: 'stylesheet', href: pretixWidgetCSSURI }
    ]
})
</script>
  
<style scoped></style>
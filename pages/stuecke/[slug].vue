<template>
    <div>
        <Hero :title="event.title" breadcrumb="show" />
        <h1>Show: {{ slug }}</h1>
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
    </div>
</template>
  
<script setup>
/**
 * PAGE: /stuecke/[slug]
 * 
 * This page shows a single event and the ticket shop
 */

import { storeToRefs } from 'pinia'
import { useEventsStore } from '~/store/events';

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
let pretixScript = document.createElement('script')
pretixScript.setAttribute('src', config.public.pretixBaseUrl + '/widget/v1.de.js')
document.head.appendChild(pretixScript)

// include pretix widget css in head
useHead({
    link: [
        { rel: 'preconnect', href: config.public.pretixBaseUrl },
        { rel: 'stylesheet', href: pretixWidgetCSSURI }
    ]
})
</script>
  
<style scoped></style>
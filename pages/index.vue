<template>
    <div>

        <home-hero />

        <!-- Temporary notification for Test Deployment -->
        <!-- <div class="absolute inset-x-0 top-32 w-fit z-60 bg-orange-100/80 border-l-4 border-orange-500/80 text-orange-700 p-4"
            role="alert">
            <p class="font-bold">Achtung!</p>
            <p class="md:mr-16">Dies ist eine Testseite!</p>
        </div> -->

        <home-events />

        <newsletter />

        <contact-form />

        <home-map />

        <the-footer />
    </div>
</template>

<script setup>
/**
 * PAGE: index.vue
 *
 * This is the landing page of the website.
 */
// No Default Layout on the index page
definePageMeta({
    layout: false,
});


import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
} from '@headlessui/vue'

const isOpen = ref(true)

function setIsOpen(value) {
    isOpen.value = value
}

</script>

<style scoped></style>
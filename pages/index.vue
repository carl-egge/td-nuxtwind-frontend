<template>
    <div>
        <home-hero />

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
</script>

<style scoped></style>
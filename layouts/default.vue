<template>
    <div>

        <the-navbar />

        <div class="mt-[65vh] sm:mt-[45vh] lg:mt-[30vh]">
            <slot />

        </div>

        <the-footer />
    </div>
</template>

<script setup lang="ts">
/**
 * LAYOUT: default.vue
 *
 * This is the default layout for all pages except the index.vue.
 * It includes the navbar and the footer.
 */

</script>

<style scoped></style>
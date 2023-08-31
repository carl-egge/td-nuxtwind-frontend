<template>
    <div id="pageHero" class="bg-black px-6 py-20 text-center text-white">
        <Icon name="mingcute:lighthouse-line" class="text-xl mb-4" />
        <h2 class="mb-7 text-5xl font-bold">{{ title }}</h2>
        <div class="mb-9 text-xs uppercase">
            <NuxtLink to="/" class="hover:text-red-100">Home</NuxtLink>
            <span v-if="breadcrumb == 'show'">&ensp;&ensp;/&ensp;&ensp;</span>
            <NuxtLink v-if="breadcrumb == 'show'" to="/stuecke" class="hover:text-red-100">
                PROGRAMM
            </NuxtLink>
            &ensp;&ensp;/&ensp;&ensp;
            {{ title.toUpperCase() }}
        </div>
    </div>
</template>

<script setup lang="ts">
const { title, breadcrump } = defineProps(['title', 'breadcrumb'])
</script>

<style scoped></style>
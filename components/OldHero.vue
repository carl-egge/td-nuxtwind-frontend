<template>
    <div class="top-0 absolute z-10 bg-black text-td-accent-300 w-full h-[30vw] min-h-[75vh] sm:min-h-[55vh] lg:min-h-[40vh] xl:max-h-[45vh]"
        :style="'background-image: url(' + background +
            '); background-repeat: no-repeat; background-size: cover; background-position: center center;'">

        <div class="flex flex-col h-full items-center justify-center bg-gradient-to-b from-td-primary-500/90 to-td-primary-500/30 min-h-[75vh] sm:min-h-[55vh] lg:min-h-[40vh] xl:max-h-[45vh]"
            aria-hidden="true">

            <Icon name="mingcute:lighthouse-line" class="text-xl mb-4" />
            <h2 class="mb-7 text-6xl font-bold">{{ title }}</h2>
            <div class="mb-9 text-sm uppercase text-white">
                <NuxtLink to="/" class="hover:text-td-accent-300">Home</NuxtLink>
                <span v-if="breadcrumb == 'show'">&ensp;&ensp;/&ensp;&ensp;</span>
                <NuxtLink v-if="breadcrumb == 'show'" to="/stuecke" class="hover:text-td-accent-300 uppercase">
                    Spielplan
                </NuxtLink>
                &ensp;&ensp;/&ensp;&ensp;
                {{ title.toUpperCase() }}
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
// import props
const { title, breadcrumb } = defineProps(['title', 'breadcrumb'])

//@ts-ignore
import background from "../assets/images/hero-letters-shadow.jpg";
</script>

<style scoped></style>
<template>
    <!-- <div class="hero w-full" :style="'background-image: url(' + background +
        '); background-repeat: no-repeat; background-size: cover; background-position: top center;'"> -->
    <div class="hero w-full">
        <!-- <div class="flex h-full bg-gradient-to-b from-[#e1abf7]/40 to-[#e1abf7]/10" aria-hidden="true"> -->
        <div class="flex h-full items-end pb-28">
            <div
                class="z-10 w-full bg-td-accent bg-opacity-60 pt-16 pb-8 px-8 text-center text-td-primary/80 flex flex-col items-center justify-end whitespace-pre-wrap">
                <h1 class="text-6xl mb-2 leading-tight">
                    {{ title }}
                </h1>
                <p class="uppercase mt-4">
                    <NuxtLink to="/" class="hover:text-td-secondary">Home</NuxtLink>
                    <span v-if="breadcrumb == 'show'">&ensp;&ensp;/&ensp;&ensp;</span>
                    <NuxtLink v-if="breadcrumb == 'show'" to="/stuecke" class="hover:text-td-secondary uppercase">
                        Spielplan
                    </NuxtLink>
                    &ensp;&ensp;/&ensp;&ensp;
                    {{ title.toUpperCase() }}
                </p>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script setup lang="ts">
// import props
const { title, breadcrumb, backgroundimage } = defineProps({
    title: { type: String, required: true, default: 'TheaterDECK' },
    breadcrumb: { type: String, required: true, default: 'home' },
    backgroundimage: { type: String, required: true, default: '' },
});

// import background from "../assets/images/hero-highkey-windschief.jpg";
</script>

<style scoped>
.hero {
    position: relative;
    height: 75vh;
    padding-top: 80px;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: v-bind("backgroundimage");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    /* background: linear-gradient(to bottom, #dc8fff43, #dc8fff0d); */
    width: 100%;
    height: 100%;
}
</style>
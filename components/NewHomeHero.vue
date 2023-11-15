<template>
    <div class="hero w-full" :style="'background-image: url(' + background +
        '); background-repeat: no-repeat; background-size: cover; background-position: top center;'">
        <!-- <div class="flex h-full bg-gradient-to-b from-[#e1abf7]/40 to-[#e1abf7]/10" aria-hidden="true"> -->
        <div class="flex h-full items-end pb-28">
            <div
                class="w-full bg-td-accent bg-opacity-60 pt-16 pb-8 px-8 text-right text-td-primary/90 flex flex-col items-end justify-end whitespace-pre-wrap">
                <h1 class="uppercase text-3xl mb-2 leading-tight">
                    {{ heading }}
                </h1>
                <p>
                    {{ subheading }}
                </p>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script setup lang="ts">

const heading = "Wir sind echt und wir erzählen echte geschichten\nwahre geschichten"
const subheading = "Windschief | von der Waterkant an den Bühnenrand"

//@ts-ignore
import background from "../assets/images/hero-highkey-windschief.jpg";
</script>

<style scoped>
.hero {
    position: relative;
    height: 80vh;
    padding-top: 80px;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
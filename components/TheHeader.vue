<template>
    <header class="absolute w-full max-w-screen-2xl bg-primary text-background shadow-lg rounded-b-lg z-20">
        <div class="w-full px-4 py-2 flex items-center justify-between">
            <!-- Logo -->
            <div class="pl-14 md:px-4 flex-grow md:flex-grow-0">
                <NuxtLink to="/" class="block md:flex items-center gap-2 h-16 py-2">
                    <!-- <img :src="logoSrc" alt="Logo" class="w-full h-full object-contain" /> -->
                    <Logo color="#fbfcfc" />
                    <h1 class="hidden md:block uppercase text-xl leading-6 tracking-wide">
                        <span class="font-bold">Theater</span>deck
                        <br />Hamburg
                    </h1>
                </NuxtLink>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden text-sm uppercase md:flex space-x-8">
                <ULink v-for="link in desktop_links" :key="link.to" :to="link.to"
                    class="hover:underline hover:decoration-2 hover:underline-offset-4">
                    {{ link.text }}
                </ULink>
            </nav>

            <!-- Burger Menu Button -->
            <div class="md:pl-48">
                <UButton icon="i-heroicons-bars-3" color="black" size="xl" variant="ghost" @click="isOpen = true" />
            </div>

            <!-- Slideover Menu -->
            <USlideover v-model="isOpen" side="top" :ui="{ strategy: 'override', height: 'h-screen' }">
                <div class="h-full bg-background text-text overflow-y-auto text-center">
                    <!-- Close Button -->
                    <UButton icon="i-heroicons-x-mark" color="gray" variant="ghost" size="xl"
                        class="absolute top-6 right-6" @click="isOpen = false" />
                    <div class="p-4 pt-24 h-full align-text-middle">
                        <NuxtLink to="/">
                            <div class="h-12 w-12 mx-auto">
                                <Logo color="#fec600" />
                            </div>
                            <h2 class="text-xl font-semibold mb-8 mt-2 text-primary uppercase">{{ title }}</h2>
                        </NuxtLink>
                        <nav class="flex flex-col text-lg">
                            <NuxtLink v-for="link in burger_links" :key="link.to" :to="link.to"
                                class="hover:text-secondary" @click="isOpen = false">
                                {{ link.text }}
                                <hr class="my-4 w-6 mx-auto">
                            </NuxtLink>
                        </nav>
                    </div>
                </div>
            </USlideover>
        </div>
    </header>
</template>

<script setup>
/**
 * TheHeader
 * 
 * Navigation Bar at top including collapsable menu.
 */
// import logoSrc from '~/assets/images/td-nav-bar-logo-red.svg'
const title = "Theaterdeck"
const isOpen = ref(false)

const desktop_links = [
    { to: '/stuecke', text: 'Spielplan' },
    { to: '/schule', text: 'Kurse' },
    { to: '/vermietung', text: 'Raummiete' },
]
const burger_links = [
    { to: '/stuecke', text: 'Spielplan' },
    { to: '/schule', text: 'Theater Jugend' },
    { to: '/vermietung', text: 'Raummiete' },
    { to: '/kontakt', text: 'Kontakt' },
    { to: '/datenschutz', text: 'Datenschutz' },
    { to: '/impressum', text: 'Impressum' },
]
</script>
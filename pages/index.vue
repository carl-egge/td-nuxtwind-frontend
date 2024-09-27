<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <TheHeader class="shadow-none mb-2" />

    <!-- Main content area -->
    <main class="mt-[80px] mb-0 flex-grow flex flex-col px-2 md:px-4 relative overflow-hidden md:pb-4 md:pt-4 h-full">

      <!-- DESKTOP SCREENS -->
      <div class="hidden md:block relative flex-grow overflow-hidden">
        <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{
          item: 'basis-full',
          container: 'rounded-lg h-full',
          wrapper: 'h-full',
        }" :prev-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-left-16-solid',
          class: '-left-2 ring-0 shadow-none bg-transparent'
        }" :next-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-right-16-solid',
          class: '-right-1 ring-0 shadow-none bg-transparent text-xl'
        }" arrows class="w-[98%] mx-auto">
          <div class="w-full h-full relative">

            <!-- Slider Design for large Screens -->
            <div class="h-full hidden md:flex px-10">
              <div class="w-1/3 h-full py-4 -mr-4 z-10">
                <div class="w-full h-full flex flex-col">
                  <div class="bg-secondary rounded-lg flex-grow overflow-hidden p-4 shadow-lg flex flex-col">
                    <div class="flex-grow flex items-center">
                      <h2 class="marked-text text-right leading-normal">
                        <span class="bg-white text-secondary">
                          {{ item.title }}
                        </span>
                      </h2>
                    </div>
                    <div class="flex-shrink-0">
                      <h4
                        class="text-right uppercase text-background text-base whitespace-pre leading-4 2xl:text-xl mb-4">
                        {{ item.subtitle }}
                      </h4>
                    </div>
                  </div>
                  <div class="flex-shrink-0 mt-4">
                    <UButton size="lg" class="py-4 rounded-lg text-base bg-accent2 shadow-lg" to="/stuecke" block>
                      {{ ctaText }}
                    </UButton>
                  </div>
                </div>
              </div>
              <div class="w-2/3 h-full">
                <img :src="item.src" :alt="item.title" class="w-full h-full object-cover object-center rounded-lg"
                  draggable="false">
              </div>
            </div>
          </div>
        </UCarousel>
      </div>

      <!-- PHONE SCREENS -->
      <div class="relative md:hidden flex-grow overflow-hidden">
        <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{
          item: 'basis-full',
          container: 'rounded-lg h-full',
          wrapper: 'h-full',
          indicators: {
            wrapper: 'relative bottom-28 mt-4'
          },
        }" indicators class="w-[98%] mx-auto">
          <div class="w-full h-full relative">
            <!-- Slider Design for small Screens -->
            <div class="h-full flex flex-col px-2 pb-2">
              <div class="w-full flex-grow">
                <img :src="item.src" :alt="item.title" class="w-full h-full object-cover object-center rounded-lg"
                  draggable="false">
              </div>
              <div
                class="bg-secondary flex-shrink h-52 rounded-lg mx-2 -mt-8 shadow-lg text-background text-center p-6">
                <h2 class="text-2xl mb-2">{{ item.title }}</h2>
                <h4 class="text-background text-sm whitespace-pre leading-4 uppercase">{{ item.subtitle }}</h4>
              </div>
              <UButton to="/stuecke" size="lg" variant="solid"
                class="p-4 mx-2 mt-3 text-base bg-accent2 justify-center">
                {{ ctaText }}
              </UButton>
            </div>
          </div>
        </UCarousel>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
/**
 * PAGE: index.vue
 *
 * This is the landing page of the website.
 */
definePageMeta({
  layout
    : 'home'
})

import { onMounted } from 'vue'
import { useEventsStore } from '~/stores/events'

const eventsStore = useEventsStore()

onMounted(() => {
  eventsStore.fetchEvents()
  // eventsStore.fetchTestEvents()
})

const ctaText = 'Spielplan und Tickets'

const items = [
  {
    title: 'Theaterdeck\nHamburg',
    subtitle: '',
    to: '/stuecke',
    src: '/images/hero/hero-letters-shadow.jpg'
  },
  {
    title: 'So, amüsieren Sie sich?!',
    subtitle: 'INGRID LAUSUND\n Hysterikon',
    to: '/stuecke',
    src: '/images/hero/hero-highkey-windschief.jpg'
  },
  {
    title: 'Neue Termine November 2024',
    subtitle: 'GUNILLA BERGSTRÖM\n Willi Wiberg',
    to: '/stuecke',
    src: '/images/hero/hero-highkey-petterson.jpg'
  },
  {
    title: 'Weil auch in diesen Zeiten irgendwer das Richtige tun muss, einfach, weil es richtig ist.',
    subtitle: 'KIRSTEN BOIE\n Dunkelnacht',
    to: '/stuecke',
    src: '/images/hero/hero-highkey-sr.jpg'
  }
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 7000)
})
</script>

<style></style>

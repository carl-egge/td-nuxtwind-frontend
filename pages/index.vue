<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <TheHeader class="shadow-none mb-2" />

    <!-- Main content area -->
    <main class="mt-[80px] flex-grow flex flex-col px-2 md:px-4 relative overflow-hidden md:pb-4 h-full">

      <!-- Carousel container -->
      <div class="flex-grow relative overflow-hidden rounded-lg">
        <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{
          container: 'h-full',
          wrapper: 'h-full',
          item: 'h-full w-full overflow-hidden',
          default: {
            // Only show arrows on md screens and up
            prevButton: {
              class: 'hidden md:flex',
            },
            nextButton: {
              class: 'hidden md:flex',
            }
          }
        }" class="h-full" indicators arrows>
          <div class="w-full h-full relative">
            <!-- Slide image with overlay -->
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-text bg-opacity-20"></div>
            <img :src="item.src" :alt="item.title" class="w-full h-full object-cover object-center rounded-lg"
              draggable="false">
            <!-- Slide Title for larger screens   bg-[#191c1def]   -->
            <div
              class="hidden md:block absolute top-2 left-2 bottom-2 w-2/5 rounded px-8 py-4 bg-secondary text-background">
              <div class="flex flex-col h-full">
                <div class="flex-grow overflow-hidden">
                  <div class="h-full flex flex-col justify-center">
                    <h2 v-fluid-typography="{ min: 24, max: 64, compress: 10 }" class="font-bold text-right">
                      {{ item.title }}
                    </h2>
                  </div>
                </div>
                <div class="flex-shrink-0 mt-4">
                  <h4 class="text-right uppercase text-background text-base whitespace-pre leading-4 2xl:text-xl mb-4">
                    {{ item.subtitle }}
                  </h4>
                  <UButton size="lg" class="py-4 text-base bg-accent" to="/stuecke" block>
                    {{ ctaText }}
                  </UButton>
                </div>
              </div>
            </div>
            <!-- Slide Title for smaller screens -->
            <div class="block md:hidden absolute w-full p-2 bottom-0">
              <div class="w-full rounded px-2 py-8 text-background bg-secondary text-center">
                <h2 class="text-4xl font-bold mb-2">{{ item.title }}</h2>
                <h4 class="text-background whitespace-pre leading-4 uppercase">{{ item.subtitle }}</h4>
              </div>
            </div>
          </div>
        </UCarousel>
      </div>

      <!-- Button container for smaller screens -->
      <div class="block md:hidden pt-2 pb-4">
        <UButton to="/stuecke" size="lg" variant="solid" class="py-4 text-base bg-accent" block>
          {{ ctaText }}
        </UButton>
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

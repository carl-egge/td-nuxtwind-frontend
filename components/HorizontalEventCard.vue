<template>
    <div>
        <div class="max-w-lg mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img v-if="event.picture" class="h-56 w-full object-cover object-top md:h-full md:w-48"
                        :src="switchBaseUrl(event.picture)" :alt="'Bild: ' + event.name.de">
                    <div v-else
                        class="h-48 w-full object-cover md:h-full md:w-48 bg-td-pink text-2xl p-2 text-white flex justify-center items-center">
                        <h4 class="font-bold">{{ event.name.de }}</h4>
                    </div>
                </div>
                <div class="p-8 bg-pink-50">
                    <div class="uppercase tracking-wide text-sm text-td-pink font-semibold">
                        <!-- TODO Change to dynamic Author name -->
                        Autor Name
                    </div>
                    <h4 class="block mt-1 text-lg leading-tight font-medium text-black">
                        {{ event.name.de }}
                    </h4>
                    <p class="mt-2 text-slate-500">
                    <div class="line-clamp-3">
                        {{ event.desc.de }}
                    </div>
                    <div class="text-right">
                        <button
                            class="mt-2 rounded-lg py-3 px-6 text-center text-xs font-bold uppercase text-td-pink hover:bg-pink-500/10 active:bg-pink-500/30"
                            type="button" @click="goToEvent(event.slug)">
                            zum Stück
                            <Icon name="material-symbols:arrow-right-alt-rounded" aria-hidden="true" class="h-4 w-4" />
                        </button>
                    </div>
                    </p>
                </div>
            </div>
        </div>


        <!-- HorizontalCard
            <div
                class="my-4 relative flex w-full max-h-80 flex-row rounded-xl bg-pink-50 bg-clip-border text-gray-700 shadow-md">
                <div
                    class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img v-if="event.picture" :src="switchBaseUrl(event.picture)" :alt="'Bild: ' + event.name.de"
                        class="h-full w-full object-cover object-top" />
                    <div v-else
                        class="h-full w-full object-cover bg-td-pink text-4xl p-2 text-white flex justify-center items-center">
                        <h4 class="font-bold">{{ event.name.de }}</h4>
                    </div>
                </div>
                <div class="p-6">
                    <h6
                        class="mb-4 block text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        Astrid Lindgren
                    </h6>
                    <h4
                        class="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {{ event.name.de }}
                    </h4>
                    <p class="mb-8 block text-base font-normal leading-relaxed text-gray-700 antialiased">
                    <div class="line-clamp-3">
                        {{ event.desc.de }}
                    </div>
                    </p>
                    <button
                        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button" @click="goToEvent(event.slug)">
                        zum Stück
                        <Icon name="material-symbols:arrow-right-alt-rounded" aria-hidden="true" class="h-4 w-4" />
                    </button>
                </div>
            </div>
         -->

    </div>
</template>

<script setup>
// Get props
const { event } = defineProps(['event'])
// Import composables
const { switchBaseUrl } = useAPIBaseUrl()
// @ts-ignore
const goToEvent = (slug) => navigateTo('/stuecke/' + slug)
</script>
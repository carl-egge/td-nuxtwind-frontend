<template>
    <div>
        <div
            class="group relative block my-8 max-w-7xl mx-auto bg-white rounded shadow-md md:max-w-5xl xl:max-w-7xl hover:bg-background hover:cursor-pointer">
            <span class="absolute inset-0 border-2 border-dashed rounded border-primary"></span>
            <div
                class="relative border h-full transform items-end transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div class="md:flex bg-white overflow-hidden rounded md:max-h-80" @click="goToEvent(event.slug)">
                    <div class="md:shrink-0">
                        <img v-if="event.picture"
                            class="h-56 sm:h-80 w-full object-cover object-top md:h-full md:w-48 lg:w-80"
                            :src="switchBaseUrl(event.picture)" :alt="'Bild: ' + event.name.de">
                        <div v-else
                            class="h-48 w-full object-cover md:h-full md:w-48 lg:w-80 bg-primary text-2xl p-2 text-white flex justify-center items-center">
                            <h4 class="font-bold">{{ event.name.de }}</h4>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-primary font-semibold">
                            Autor Name
                        </div>
                        <h4 class="block mt-1 text-xl leading-tight font-medium text-black">
                            {{ event.name.de }}
                        </h4>
                        <div class="line-clamp-3 mt-2 text-gray-500 mb-8">
                            {{ event.desc.de }}
                        </div>
                        <!-- <div class="absolute bottom-4 right-4">
                            <UButton class="mt-2" color="primary" type="button" @click="goToEvent(event.slug)">
                                zum Stück
                                <Icon name="material-symbols:arrow-right-alt-rounded" aria-hidden="true"
                                    class="h-4 w-4" />
                            </UButton>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
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
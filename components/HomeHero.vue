<template>
    <div class="bg-white min-h-screen md:min-h-[80vh]" :style="'background-image: url(' + background +
        '); background-repeat: no-repeat; background-size: cover; background-position: left top;'">

        <div class="bg-gradient-to-b from-black to-black/30 min-h-screen md:min-h-[80vh]" aria-hidden="true">

            <header class="absolute inset-x-0 top-0 z-50">

                <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div class="flex lg:flex-1 lg:basis-8/12">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Theaterdeck</span>
                            <img class="h-10 w-auto hover:drop-shadow-2xl hover:shadow-red-600"
                                src="~/assets/images/td-nav-bar-logo-red.svg" alt="Theaterdeck" />
                        </a>
                    </div>
                    <div class="flex lg:hidden">
                        <button type="button"
                            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-600 hover:text-red-400"
                            @click="mobileMenuOpen = true">
                            <span class="sr-only">Open main menu</span>
                            <Icon name="material-symbols:menu-rounded" class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="hidden lg:flex lg:flex-1 lg:gap-x-12 lg:items-center">
                        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                            class="text-sm font-semibold leading-6 text-white">
                            {{ item.name }}
                        </NuxtLink>
                        <NuxtLink to="/stuecke">
                            <button class="td-btn-primary">
                                Programm
                            </button>
                        </NuxtLink>
                    </div>
                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                        <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a> -->
                    </div>
                </nav>

                <ClientOnly>
                    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                        <div class="fixed inset-0 z-50" />
                        <DialogPanel
                            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div class="flex items-center justify-between">
                                <a href="#" class="-m-1.5 p-1.5">
                                    <span class="sr-only">Theaterdeck</span>
                                    <img class="h-10 w-auto" src="~/assets/images/td-nav-bar-logo-red.svg"
                                        alt="Theaterdeck" />
                                </a>
                                <button type="button" class="-m-2.5 rounded-md p-2.5 text-red-600 hover:bg-gray-100"
                                    @click="mobileMenuOpen = false">
                                    <span class="sr-only">Close menu</span>
                                    <Icon name="material-symbols:cancel-outline-rounded" class="h-6 w-6"
                                        aria-hidden="true" />
                                </button>
                            </div>
                            <div class="mt-6 flow-root">
                                <div class="-my-6 divide-y divide-gray-500/10">
                                    <div class="space-y-2 py-6">
                                        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            {{ item.name }}
                                        </NuxtLink>
                                    </div>
                                    <div class="py-6">
                                        <NuxtLink to="/stuecke"
                                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Programm
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </ClientOnly>

            </header>

            <div class="relative isolate px-6 pt-14 lg:px-8">
                <!-- <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                                class="absolute inset-0" aria-hidden="true" />Read more <span
                                aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
            </div> -->
                <div class="text-center mt-60">
                    <h1 class=" text-3xl font-bold tracking-tight text-white sm:text-6xl">
                        Willkommen im Theaterdeck!
                    </h1>
                    <div class="">
                        <p class="mt-6 text-xl leading-8 text-white">
                            Der Sturm wird stärker.<br />Das macht nichts,ich auch!
                        </p>
                        <p class="text-sm text-white">
                            ~ Astrid Lindgren <span class="uppercase">Pippi Langstrumpf</span>
                        </p>
                    </div>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <!-- <a href="#"
                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                        started</a> -->
                        <NuxtLink to="/stuecke">
                            <button class="td-btn-primary">
                                Programm
                            </button>
                        </NuxtLink>
                        <a href="#newsletter" class="text-sm font-semibold leading-6 text-white">
                            Newsletter <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <!-- <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'

//@ts-ignore
import background from "../assets/images/hero-letters-shadow.jpg";

const navigation = [
    { name: 'Schule', href: '/schule' },
    { name: 'Vermietung', href: '/vermietung' },
]

const mobileMenuOpen = ref(false)
</script>

<style scoped></style>
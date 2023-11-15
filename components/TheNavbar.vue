<template>
    <header class="fixed inset-x-0 top-0 z-20 transition duration-1000 ease-in-out"
        :class="{ 'bg-gradient-to-b from-text/90 to-transparent': !scrolled, 'bg-text text-td-accent border-b-4 border-td-accent': scrolled }">

        <!-- Temporary notification for Test Deployment -->
        <!-- <div class="z-20 flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>Achtung! Es handelt sich um eine Testseite. Bitte kaufen sie keine Tickets!</p>
        </div> -->

        <nav class="flex items-center justify-between py-4 px-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1 lg:basis-8/12">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Theaterdeck</span>
                    <img class="transition duration-1000 ease-in-out w-auto hover:drop-shadow-2xl hover:shadow-td-accent"
                        :class="{ 'h-10': !scrolled, 'h-8': scrolled }" src="~/assets/images/td-nav-bar-logo-white.svg"
                        alt="Theaterdeck" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-td-accent hover:text-td-accent"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Icon name="material-symbols:menu-rounded" class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:basis-4/12 lg:gap-x-12 lg:items-center lg:justify-end">
                <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                    class="text-sm font-semibold leading-6 text-white nav-link-ltr nav-link">
                    {{ item.name.toUpperCase() }}
                </NuxtLink>
                <NuxtLink v-if="$route.path != '/'" to="/stuecke">
                    <button class="td-btn-primary">
                        Spielplan
                    </button>
                </NuxtLink>
                <NuxtLink v-else to="/stuecke"
                    class="uppercase text-sm font-semibold leading-6 text-white nav-link nav-link-ltr hover:cursor-pointer">
                    Spielplan
                </NuxtLink>
            </div>
        </nav>

        <ClientOnly>
            <TransitionRoot :show="mobileMenuOpen">
                <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false">
                    <TransitionChild enter="transition ease-in-out duration-500 transform" enter-from="translate-x-full"
                        enter-to="-translate-x-0" leave="transition ease-in-out duration-500 transform"
                        leave-from="-translate-x-0" leave-to="translate-x-full">
                        <!-- <div class="fixed inset-0 z-50" /> -->
                        <DialogPanel
                            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div class="flex items-center justify-between">
                                <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                                    <span class="sr-only">Theaterdeck</span>
                                    <img class="h-10 w-auto" src="~/assets/images/td-nav-bar-logo-red.svg"
                                        alt="Theaterdeck" />
                                </NuxtLink>
                                <button type="button" class="-m-2.5 rounded-md p-2.5 text-td-primary hover:bg-gray-100"
                                    @click="mobileMenuOpen = false">
                                    <span class="sr-only">Close menu</span>
                                    <Icon name="material-symbols:cancel-outline-rounded" class="h-6 w-6"
                                        aria-hidden="true" />
                                </button>
                            </div>
                            <div class="mt-6 flow-root">
                                <div class="-my-6 divide-y divide-gray-500/10">
                                    <div class="space-y-2 py-6">
                                        <NuxtLink to="/" @click="mobileMenuOpen = false"
                                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Home
                                        </NuxtLink>
                                        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                                            @click="mobileMenuOpen = false"
                                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            {{ item.name }}
                                        </NuxtLink>
                                    </div>
                                    <div class="py-6">
                                        <NuxtLink to="/stuecke" @click="mobileMenuOpen = false"
                                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Spielplan
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </TransitionRoot>
        </ClientOnly>

    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { onMounted, onUnmounted } from 'vue';

const navigation = [
    { name: 'Theaterschule', href: '/schule' },
    { name: 'Vermietung', href: '/vermietung' },
]

const onScroll = () => {
    scrolled.value = window.scrollY > 320;
};

onMounted(() => {
    window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});

const scrolled = ref(false);
const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
    text-decoration: none;
    position: relative;
    opacity: 0.75;
}

.nav-link:hover {
    opacity: 1;
}

.nav-link::before {
    /* transition: 300ms; */
    height: 4px;
    content: "";
    position: absolute;
    margin-bottom: -10px;
    background-color: white;
}

.nav-link-ltr::before {
    width: 0%;
    bottom: 10px;
}

.nav-link-ltr:hover::before {
    width: 100%;
}
</style>
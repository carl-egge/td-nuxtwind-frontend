<template>
    <section id="home-events">
        <div class="mx-auto max-w-2xl p-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Veranstaltungen</h2>
            <div v-if="eventsStore.countEvents > 0" v-for="event in eventsStore.getAll">
                <HorizontalEventCard :event="event" />
            </div>
            <div v-else>
                <p> Hups, hier fehlen die events.</p>
            </div>
        </div>
    </section>
    <!-- <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
                <a v-for="product in  products " :key="product.id" :href="product.href" class="group"> -->
    <!-- <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img :src="product.imageSrc" :alt="product.imageAlt"
                            class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div> -->
    <!-- <div
                        class="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-td-pink overflow-hidden">
                        <img :alt="product.imageAlt" :src="product.imageSrc"
                            class="w-full align-middle rounded-t-lg object-cover object-center group-hover:opacity-75 max-h-96">
                        <blockquote class="relative p-8 mb-4">
                            <h4 class="text-xl font-bold text-white">
                                {{ product.name }}
                            </h4>
                            <p class="text-md font-light mt-2 text-white line-clamp-4">
                                {{ product.desc }}
                            </p>
                        </blockquote>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{{ product.author }}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
                </a>
            </div>
        </div>
    </div> -->
</template>
  
<script setup>

import { useEventsStore } from '~/stores/events';
const eventsStore = useEventsStore();

const products = [
    {
        id: 1,
        name: 'Pippi Langstrumpf',
        desc: 'Pippi Langstrumpf wohnt mit ihrem Pferd und dem kleinen Affen Herrn Nilsson in der Villa Kunterbunt und macht, was sie will. Sie ist das stärkste Mädchen der Welt, herrlich unerzogen und lügt ganz wundervoll. Pippi triumphiert über Einbrecher, Lehrerinnen und Polizisten und ist für Tommy und Annika eine wunderbare Freundin.',
        author: 'Astrid Lindgren',
        href: '#',
        price: 'Eintritt: 16 € - 10 €',
        imageSrc: 'https://berliner-kindertheater.de/wp-content/uploads/pippi_buch-5_frei.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Willi Wiberg',
        desc: 'Mit Willi Wiberg wird es nie langweilig! Die Abenteuer von der schwedischen Kinderbuchautorin Gunilla Bergström, die Willi Wiberg zusammen mit seinem Papa erlebt, sind Alltagsgeschichten gespickt mit viel kindlicher Phantasie. Individuell illustriert und schön geschrieben sind die Willi Wiberg Bücher ein echter Kinderbuchklassiker und dürfen in keinem Kinderzimmer fehlen. Nach der Veröffentlichung der Willi Wiberg Bücher vor nun 50 Jahren kommt Willi nun endlich auch zum ersten Mal auf die Theaterbühne!',
        author: 'Gunilla Bergström',
        href: '#',
        price: 'Eintritt: 16 € - 10 €',
        imageSrc: 'https://medien.umbreitkatalog.de/bildzentrale_original/978/378/910/9096.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
]
</script>
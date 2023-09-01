<template>
    <div>
        <Hero title="Vermietung" breadcrumb="home" />
        <main>
            <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div class="absolute inset-0 -z-10 overflow-hidden">
                    <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true">
                        <defs>
                            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1"
                                patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                stroke-width="0" />
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0"
                            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div class="lg:pr-4">
                            <div class="lg:max-w-lg">
                                <p class="text-base font-semibold leading-7 text-td-pink">
                                    Für alle die einen Raum brauchen
                                </p>
                                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    <span class="uppercase">Theaterdeck</span> Raummiete
                                </h1>
                                <p class="mt-6 text-xl leading-8 text-gray-700">
                                    Hochzeiten || Geburtstage || Proben || Theaterproben || Navigationstraining ||
                                    Vorsprechvorbereitung || Monologarbeit || Camera Acting || Anlegemanöver ||
                                    Sprechübungen || Bühnenpatent
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="~/assets/images/deck-1-stockimage.jpg" alt="Deck I" />
                    </div>
                    <div
                        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div class="lg:pr-4">
                            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Entdecken Sie den perfekten Veranstaltungsort für Ihre Träume in Barmbek! Unser
                                    vielfältiger Theatersaal bietet eine charmante Atmosphäre, eine einladende Bühne und
                                    eine umfangreiche technische Grundausstattung. Egal, ob Sie eine Hochzeit, eine
                                    Vorstellung oder ein Firmenevent planen – bei uns wird Ihre Veranstaltung unvergesslich.
                                    Mieten Sie noch heute unseren einzigartigen Theatersaal und verwandeln Sie Ihre Ideen in
                                    unvergessliche Momente!
                                </p>
                                <ul role="list" class="mt-8 space-y-8 text-gray-600">
                                    <li class="flex gap-x-3">
                                        <Icon name="mdi:bank" class="mt-1 flex-none h-5 w-5 text-td-pink"
                                            aria-hidden="true" />
                                        <span><strong class="font-semibold text-td-pink uppercase">Deck I</strong> (großer
                                            Saal | 100m²)*<br>
                                            montags bis donnerstags<br>
                                            10 bis 14 Uhr ||
                                            inkl. Bühne (mind. 4m mal 4m) | kleine mobile Tonanlage | Arbeitslicht</span>
                                    </li>
                                    <li class="flex gap-x-3">
                                        <Icon name="mdi:home" class="mt-1 flex-none h-5 w-5 text-td-pink"
                                            aria-hidden="true" />
                                        <span><strong class="font-semibold text-td-pink uppercase">Deck II</strong>
                                            (Studiobühne | 40m²)*<br>
                                            montags bis donnerstags<br>
                                            10 bis 14 Uhr ||
                                            inkl. kleine mobile Tonanlage | Arbeitslicht</span>
                                    </li>
                                    <li class="flex gap-x-3">
                                        <Icon name="mdi:dots-horizontal" class="mt-1 flex-none h-5 w-5 text-td-pink"
                                            aria-hidden="true" />
                                        <span><strong class="font-semibold text-td-pink uppercase">Was noch möglich
                                                ist</strong>
                                            (Regelmäßig oder einmalig) Hochzeiten | Geburtstage | Konfirmationen | Trauungen
                                            | und und und</span>
                                    </li>
                                </ul>
                                <p class="mt-8">
                                    Sämtliche Möglichkeiten und Konditionen unter: <a
                                        class="hover:text-td-pink text-gray-900" href="https://luettliv.de/"
                                        target="_blank">www.luettliv.de.</a>
                                    <hr class="my-2" />
                                    * Es gelten die <NuxtLink class="hover:text-td-pink text-gray-900" to="/datenschutz">
                                        Allgemeinen
                                        Geschäftsbedingungen</NuxtLink>
                                </p>
                                <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Noch Fragen? Kein Problem.
                                </h2>
                                <p class="mt-6">
                                    Nutzen Sie diese einzigartige Gelegenheit, unseren vielseitigen Theatersaal
                                    in Barmbek für Ihre Veranstaltung zu mieten. Unser Raum bietet die ideale Kulisse für
                                    unvergessliche Momente. Bei Fragen oder für Buchungsanfragen stehen wir Ihnen gerne
                                    telefonisch unter <span class="text-gray-900">040 6321322</span> oder per E-Mail unter
                                    <a class="text-gray-900 hover:text-td-pink"
                                        href="mailto:info@theaterdeck.de">info@theaterdeck.de</a> zur
                                    Verfügung. Wir freuen uns darauf, Ihre Veranstaltungsträume wahr werden zu lassen!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Newsletter />
    </div>
</template>

<script setup lang="ts">
/**
 * PAGE: vermietung.vue
 *
 * Information about the booking of rooms
 */

</script>

<style scoped></style>
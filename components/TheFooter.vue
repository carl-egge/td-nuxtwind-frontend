<template>
    <footer class="flex flex-col items-center bg-secondary text-background text-center">
        <div class="container px-6 pt-6">

            <!-- Divider -->
            <div class="mb-8 flex justify-center">
                <Icon name="material-symbols:sailing" class="h-6 w-6" aria-hidden="true" />
            </div>

            <!-- Columns section -->
            <div class="grid md:grid-cols-3 mb-2">
                <div id="footer-col-links" class="my-6 md:mb-2 md:mt-0">
                    <h5 class="mb-2.5 font-bold uppercase">Seiten</h5>
                    <div class="flex">
                        <div class="flex-none md:w-8 lg:w-16 xl:w-32 2xl:w-36"></div>
                        <div class="flex-auto">
                            <ul class="mb-0 list-none md:text-left">
                                <li>
                                    <NuxtLink to="/stuecke" class="hover:text-accent">Unser Spielplan</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/vermietung" class="hover:text-accent">Raummiete</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/datenschutz" class="hover:text-accent">Datenschutzerklärung
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/impressum" class="hover:text-accent">Impressum</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="footer-col-address" class="my-6 md:mb-2 md:mt-0">
                    <h5 class="mb-2.5 font-bold uppercase">Kontakt</h5>
                    <div class="flex">
                        <div class="flex-none  md:w-6 lg:w-16 xl:w-18 2xl:w-28"></div>
                        <div class="flex-auto">
                            <ul class="mb-0 list-none md:text-left">
                                <li>
                                    <NuxtLink href="https://maps.app.goo.gl/D1NbVJin8KoinZmE6" target="_blank"
                                        class="hover:text-accent">
                                        <Icon name="material-symbols:other-houses" aria-hidden="true" />
                                        Maurienstr. 19, 22305 Hamburg
                                    </NuxtLink>
                                </li>
                                <li class="lg:my-1">
                                    <NuxtLink href="mailto:info@theaterdeck.de" class="hover:text-accent">
                                        <Icon name="material-symbols:mail" aria-hidden="true" />
                                        info@theaterdeck.de
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink href="tel:0406321322" class="hover:text-accent">
                                        <Icon name="material-symbols:phone-enabled" aria-hidden="true" />
                                        040 6321322
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="footer-col-contact" class="my-6 md:mb-2 md:mt-0">
                    <h5 class="mb-2.5 font-bold uppercase">Bürozeiten</h5>
                    <div class="flex">
                        <div class="flex-none md:w-4 lg:w-10 xl:w-20 2xl:w-28"></div>
                        <div class="flex-auto">
                            <ul class="mb-0 list-none md:text-left">
                                <li>
                                    <strong>Montag</strong>
                                    <Icon name="material-symbols:arrow-right-rounded" aria-hidden="true" />10:00 bis
                                    12:00
                                    Uhr
                                </li>
                                <li class="lg:my-1">
                                    <strong>Donnerstag</strong>
                                    <Icon name="material-symbols:arrow-right-rounded" aria-hidden="true" />10:00 bis
                                    12:00
                                    Uhr
                                </li>
                                <li>
                                    Unser Anrufbeantworter wird täglich abgehört.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copyright section -->
        <div class="w-full mt-2 p-4 bg-black/10 rounded-t">
            <div class="flex md:justify-between flex-col-reverse md:flex-row">
                <div class="flex-1 text-center md:text-left my-2 md:my-0">
                    <NuxtLink to="/" class="hover:text-accent">
                        © 2024 Theaterdeck Hamburg
                    </NuxtLink>
                </div>
                <div class="flex-1 text-center md:text-right my-4 md:my-0">
                    <NuxtLink href="https://www.facebook.com/theaterdeck" target="_blank" class="mx-3">
                        <Icon name="mdi:facebook" class="text-2xl hover:text-accent" />
                    </NuxtLink>
                    <NuxtLink href="https://www.instagram.com/theaterdeck/" target="_blank" class="mx-3">
                        <Icon name="mdi:instagram" class="text-2xl hover:text-accent" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
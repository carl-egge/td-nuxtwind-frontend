<template>
    <section id="newsletter"
        class="relative isolate overflow-hidden bg-primary text-background py-16 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div>
                    <h2 class="text-3xl">Unser Newsletter.</h2>
                    <p class="mt-6 leading-7 text-background">
                        Verpassen Sie keine unserer kommenden Theaterstücke und bleiben Sie immer informiert! Melden Sie
                        sich für unseren Newsletter an.
                    </p>
                    <div class="mt-8 flex w-full gap-x-4">
                        <label for="email-address" class="sr-only">Email Adresse</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required=""
                            class="min-w-0 flex-auto rounded-md border-0 bg-white/80 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm leading-7"
                            placeholder="Deine Email-Adresse" />
                        <UButton type="submit" class="flex-none px-4 bg-accent" @click="subscribe()">
                            Ahoi und Enter!
                        </UButton>
                    </div>
                </div>
                <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div class="flex flex-col items-start">
                        <div class="rounded p-2 ring-1 ring-accent bg-accent">
                            <Icon name="mdi:calendar-month" class="h-6 w-6 text-background" aria-hidden="true" />
                        </div>
                        <dt class="mt-4 font-semibold uppercase">Regelmässige Updates</dt>
                        <dd class="mt-2 leading-7">Immer wenn etwas spannendes ansteht informieren wir
                            dich.
                        </dd>
                    </div>
                    <div class="flex flex-col items-start">
                        <div class="rounded p-2 ring-1 ring-accent bg-accent">
                            <Icon name="mdi:hand-back-left" class="h-6 w-6 text-background" aria-hidden="true" />
                        </div>
                        <dt class="mt-4 font-semibold uppercase">Kein spam</dt>
                        <dd class="mt-2 leading-7">Wir schicken dir maximal einmal im Monat einen Newsletter.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
        <!-- <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div> -->
    </section>
</template>

<script setup>
const subscribe = () => {
    alert('Not Yet Implemented')
}
</script>
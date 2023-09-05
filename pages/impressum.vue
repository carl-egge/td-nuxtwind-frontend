<template>
    <div>
        <Hero title="Impressum" breadcrumb="home" />
        <main class="mx-auto max-w-5xl my-10 px-4">
            <section id="imprint-address" class="my-4">
                <h2 class="mt-16 mb-2 text-2xl font-bold tracking-tight text-gray-900">Theaterdeck Hamburg</h2>
                <p class="ml-4">
                    Maurienstraße 19 <br />22305 Hamburg
                </p>
            </section>
            <section id="imprint-directions" class="my-4">
                <h2 class="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">Anreise</h2>
                Das Theaterdeck Hamburg (in der Zinnschmelze) liegt nur ein paar
                Gehminuten vom S- und U-Bahnhof Barmbek entfernt. Ihren persönlichen
                Fahrplan können Sie gerne vom
                <NuxtLink to="https://www.hvv.de/linking-service/show/f7d9ab7c02a14cd7acb1968838be1e45"
                    class="text-td-pink hover:text-red-200" target="_blank">
                    HVV
                </NuxtLink>
                erstellen lassen. Falls Sie mit dem Auto anreisen, finden Sie einige
                Parkplätze in der Nähe.
                <NuxtLink
                    to="https://maps.google.com/maps?q=Theaterdeck&hl=de&sll=53.58586,10.04499&sspn=0.010012,0.033023&hq=Theaterdeck&t=m&z=16"
                    target="_blank" class="text-td-pink hover:text-red-200">Google Maps</NuxtLink>
                erstellt Ihnen gerne Ihre eigene Route. Die Parkplatzsituation ist
                insgesamt aber eher schwierig.
            </section>
            <section id="imprint-contact" class="my-4">
                <h2 class="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">Kontakt</h2>
                <strong class="text-td-pink text-lg ml-4">
                    <Icon name="material-symbols:phone-enabled" aria-hidden="true" />
                    040 6321322
                </strong><br />
                <p class="my-2">
                    Unser Anrufbeantworter wird täglich abgehört.
                </p>
                <p>
                    Persönlicher Kontakt: mo und do 10:00 bis 12:00
                </p>
            </section>
            <section id="imprint-info" class="my-4">
                <h2 class="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">Impressum</h2>
                <p><strong>Steuer Nr.</strong> 43/090/02984</p>
                <p><strong>Geschäftsführer:</strong> Niklas Heinecke</p>
                <p><strong>Design und Umsetzung:</strong> Philip Beck und Carl Egge</p>
            </section>
        </main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
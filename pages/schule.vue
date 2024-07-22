<template>
    <div>
        <!-- Page Hero -->
        <PageHero title="Theater Jugend" :breadcrumbs="[
            { label: 'HOME', to: '/' },
        ]" :backgroundImage="`url(${heroimage})`" />

        <main>
            <!-- SECTION : THEATER JUGEND -->
            <section id="pageSchule" class="bg-background mb-8">
                <div class="max-w-7xl mx-auto pb-10">
                    <div class="flex flex-wrap">
                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-background w-full mb-1 shadow-lg rounded-lg">
                                <div class="px-4 flex-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center mt-16">
                        <div class="w-full md:w-7/12 px-4 mr-auto ml-auto">
                            <div
                                class="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-background">
                                <Icon name="mdi:account-supervisor" class="h-8 w-8 text-accent" aria-hidden="true" />
                            </div>
                            <h3 class="text-2xl mb-2 font-semibold leading-normal">
                                Die Theater Jugend Hamburg e.V.
                            </h3>
                            <p class="font-light leading-relaxed mt-4 mb-4 text-gray-600">
                                Die 1983 gegründete Theater Jugend Hamburg e.V. ist eine Theaterschule mit Vision und
                                seit September 2012 fester Bestandteil und Grundbaustein des Theaterdecks. Das
                                Kursangebot ist speziell auf Jugendliche, auch Jugendliche mit Behinderung,
                                zugeschnitten und bietet den Einstieg in die Theaterwelt. Neben Jugendproduktion und
                                altersübergreifenden Inszenierungen bietet die Theater Jugend eine eigene Plattform für
                                junge Regisseure – das Spieldeck.
                            </p>
                            <p class="font-light leading-relaxed mt-0 mb-4 text-gray-600">
                                Wir machen Theater für Jugendliche greifbar und erfahrbar. In Kursen lernen die
                                Jugendlichen Grundlagen des Theaterspielens kennen. Gleichzeitig wird ein Gespür dafür
                                entwickelt, was es heißt, sich eine Meinung zu bilden, mitzudenken und sich kritisch zu
                                positionieren. Denn nur ein Schauspieler mit einem kritischen Selbstbewusstsein schafft
                                es, eine glaubhafte Wirklichkeit auf der Bühne zu erzeugen.
                            </p>
                        </div>
                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <!-- TODO: Here goes an nuxt-image -->
                            <div class="w-80 h-80 bg-text rounded"></div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- SECTION : THEATER SCHULE -->
            <section class="mb-8">
                <div class="max-w-7xl mx-auto px-4 pb-10">
                    <!-- <div class="flex flex-wrap">
                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                                <div class="px-4 flex-auto">
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="flex flex-wrap justify-center gap-4 items-center mt-8">
                        <div class="w-80 h-80 overflow-hidden shadow-lg rounded-lg bg-background">
                            <img alt="chairs" src="~/assets/images/footer-chairs-bw.jpg"
                                class="h-full my-8 object-cover">
                        </div>
                        <div class="w-full md:w-7/12 px-4 mr-auto ml-auto">
                            <h3 class="text-2xl mb-2 font-semibold leading-normal">
                                Theaterdeck Schule
                            </h3>
                            <p class="font-light leading-relaxed mt-4 mb-4 text-gray-600">
                                Die Kursarbeit der Theater Jugend bildet die Grundlage des Theaterdecks. Für Jugendliche
                                im Alter von 11 bis 20 Jahren werden regelmäßig Einsteigerkurse angeboten. Diese geben
                                einen umfassenden Einblick in die unterschiedlichsten Bereiche der Schauspielkunst.
                                Anschließend können die Jugendlichen ihre Theaterlust im Rahmen verschiedener
                                Aufbaukurse vertiefen. Die Angebote behandeln Themenbereiche wie Improvisation, Monologe
                                oder „Körper und Sprache“. Diese Kurse werden ehrenamtlich von professionellen
                                Schauspielern und Regisseuren geleitet.
                            </p>
                            <p class="font-light leading-relaxed mt-0 mb-4 text-gray-600">
                                Die zahlreichen Theaterproduktionen der Theater Jugend ermöglichen den Jugendlichen die
                                wichtige Erfahrung, das Gelernte auch vor Publikum umzusetzen. Gleichzeitig können die
                                Jugendlichen auch in alle anderen Arbeiten, die bei einer Theaterproduktion anfallen,
                                Einblick erhalten und selbst Hand anlegen. Dazu gehören Bühnenbau, Licht- und
                                Tontechnik, Entwerfen der Werbung, der Programmhefte und vieles mehr. Im Rahmen von
                                „Spieldeck“ haben Jugendliche bereits komplette Produktionen selbständig auf die Bühne
                                gebracht.
                            </p>
                            <p class="font-light leading-relaxed mt-0 mb-4 text-gray-600">
                                Die Theater Jugend bietet jede Menge Raum für die individuelle und gemeinschaftliche
                                künstlerische Entfaltung. Wir bieten auch Jugendlichen mit Behinderung die Möglichkeit
                                an unseren Kursen teilzunehmen.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <!-- Team Section -->
            <section class="bg-background py-24">
                <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div class="max-w-2xl">
                        <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Unser Team</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Unser engagiertes Team besteht aus leidenschaftlichen Theaterpädagogen, die mit Herzblut
                            Theaterkurse leiten und die kreativen Talente Ihrer Kinder fördern. Lernen Sie unser Team
                            kennen und entdecken Sie die inspirierende Welt des Theaters mit uns!
                        </p>
                    </div>
                    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li v-for="person in people" :key="person.name">
                            <div class="flex items-center gap-x-6">
                                <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{
                                        person.name }}
                                    </h3>
                                    <p class="text-sm font-semibold leading-6 text-accent">{{ person.role }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Kurse Section -->
            <UContainer class="py-16">
                <h2 class="text-3xl font-bold mb-4">Startdeck KURSE | Einblick und Überblick für Theaterbesessene</h2>
                <p class="mb-8">
                    Die StartDECK Kurse sind Einsteigerkurse, die euch und uns die Möglichkeit geben sollen uns
                    gegenseitig
                    kennenzulernen. In sechs Terminen machen die Teilnehmer:innen erste Schritte auf der Bühne, lernen
                    jede Menge
                    Tricks und können sich in kleinen Szenen ausprobieren.
                </p>
                <UCard v-for="post in kurse" :key="post.id" class="mb-8">
                    <template #header>
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">{{ post.title }}</h3>
                            <UBadge color="primary">{{ post.category.title }}</UBadge>
                        </div>
                    </template>
                    <p>{{ post.description }}</p>
                    <template #footer>
                        <div class="flex items-center gap-4">
                            <UAvatar :src="post.author.imageUrl" :alt="post.author.name" />
                            <div>
                                <p class="font-semibold">{{ post.author.name }}</p>
                                <p class="text-sm text-gray-600">{{ post.author.role }}</p>
                            </div>
                        </div>
                    </template>
                </UCard>
                <UDivider class="my-8" />
                <p>
                    Bitte melden Sie sich über unser Kontaktformular an oder schreiben uns direkt an:
                    <UButton to="mailto:kurse@theaterdeck.de" color="primary" class="text-base" variant="link">
                        kurse@theaterdeck.de
                    </UButton>
                </p>
                <p class="mt-4 font-semibold">* Die Kurse werden gefördert vom Amt für Familie</p>
            </UContainer>

            <Newsletter />
        </main>
    </div>
</template>

<script setup lang="ts">
/**
 * PAGE: schule.vue
 *
 * Information about the Theater Jugend and Kurse.
 */

import heroimage from "../assets/images/hero-highkey-sr.jpg";

const kurse = [
    {
        id: 1,
        title: 'SPIELDECK I (6 bis 8 Jahre*)',
        href: '#',
        description:
            'Starttermin 22. März // jeweils mittwochs 16:20 bis 17:20 Uhr // 6 Termine - Kosten einmalig 55 € // Im Anschluss an die Einstiegstermine ist eine unbefristete Teilnahme möglich.',
        date: '22. März 2023',
        datetime: '2022-03-22',
        category: { title: 'mittwochs', href: '#' },
        author: {
            name: 'Marietta Saggau',
            role: 'Kursleitung',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'SPIELDECK II (9 bis 11 Jahre*)',
        href: '#',
        description:
            'Starttermin 22. März // jeweils mittwochs 17:30 bis 19:00 Uhr // 6 Termine - Kosten einmalig 80 € // Im Anschluss an die Einstiegstermine ist eine unbefristete Teilnahme möglich.',
        date: '22. März 2023',
        datetime: '2022-03-22',
        category: { title: 'mittwochs', href: '#' },
        author: {
            name: 'Marietta Saggau',
            role: 'Kursleitung',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'SPIELDECK III (ab 27 Jahre)',
        href: '#',
        description:
            'laufender Kurs // jeweils donnerstags 19:30 bis 21:00 Uhr // Quereinstieg möglich.',
        date: 'laufend',
        datetime: '2023-09-01',
        category: { title: 'donnerstags', href: '#' },
        author: {
            name: 'Thorsten Grübling',
            role: 'Kursleitung',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'DECKSSPIELE DER MS FORTUNA | Offene Improgruppe',
        href: '#',
        description:
            'Wir improvisieren uns in neue Welten - und lernen sponates Spiel und bewusste Gestaltung mit Bewegung, Stimme und Worten. Regelmässig verrühren wir vor Publikum all unsere wirren, lustigen und überraschenden Gedanken zu dramatischen Begegnungen, romantischen Duellen oder halsbrecherischen Heldentaten.Dieser Kurs ist offen für alle ab 16 Jahren und bietet die Möglichkeit, die wichtigsten Methoden, Grundhaltungen und Spiele des Improvisationstheaters kennenzulernen und auszuprobieren - ein Einstieg ist jeder Zeit möglich.',
        date: 'Impro',
        datetime: '2023-09-01',
        category: { title: 'montags', href: '#' },
        author: {
            name: 'Enrico Guzy',
            role: 'Kursleitung',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        title: 'Individuelles Gruppentraining für alle Altersklassen / Schauspieltraining für den Alltag',
        href: '#',
        description:
            'Schauspiel im Alltag kann Spaß machen. Wir bieten Ihnen für Ihre Gruppe ein individuelles Schauspieltraining. Wie kann ich meine Körpersprache verbessern und sicher im Alltag auftreten? Wie verliere ich die Angst vor großen Gruppen zu sprechen? Oder was lernt man eigentlich beim Schauspiel? Diese und andere Fragen möchten wir Ihnen gerne in einem persönlichen Unterricht beantworten. Termine: Nach Absprache Kosten: Je nach Gruppengröße (ab 7 Teilnehmern) und Dauer des Kurses',
        date: 'Jederzeit',
        datetime: '2023-09-01',
        category: { title: 'Auf Anfrage', href: '#' },
        author: {
            name: 'Niklas Heinecke',
            role: 'Regisseur',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

const people = [
    {
        name: 'Niklas Heinecke',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Anne',
        role: 'Theater Performance',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Marietta',
        role: 'Kindertheater',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lena',
        role: 'Kursleiterin',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Thorsten',
        role: 'Kursleiter',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Enrico',
        role: 'Improtheater',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
</script>

<style scoped></style>
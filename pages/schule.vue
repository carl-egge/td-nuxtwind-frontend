<template>
	<div>
		<PageHero title="Theater Jugend" :background-image="`url(${heroimage})`" />

		<main>
			<!-- SECTION : THEATER JUGEND -->
			<section id="theater-jugend" class="mb-10 md:mb-24">
				<div class="mt-8 flex flex-wrap items-center">
					<div class="mx-auto w-full px-4 md:w-7/12">
						<div
							class="ring-primary-600 mb-4 h-11 w-11 flex-none rounded-none p-2 ring-1"
						>
							<Icon
								name="mdi:account-supervisor"
								class="text-primary-600 h-full w-full"
								aria-hidden="true"
							/>
						</div>
						<!-- <div
                        class="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-background">
                            <Icon name="mdi:account-supervisor" class="h-8 w-8 text-primary-500" aria-hidden="true" />
                        </div> -->
						<h3 class="mb-6">Die Theater Jugend Hamburg e.V.</h3>
						<p>
							Die 1983 gegründete Theater Jugend Hamburg e.V. ist eine
							Theaterschule mit Vision und seit September 2012 fester
							Bestandteil und Grundbaustein des Theaterdecks. Das Kursangebot
							ist speziell auf Jugendliche, auch Jugendliche mit Behinderung,
							zugeschnitten und bietet den Einstieg in die Theaterwelt. Neben
							Jugendproduktion und altersübergreifenden Inszenierungen bietet
							die Theater Jugend eine eigene Plattform für junge Regisseure –
							das Spieldeck.
						</p>
						<p>
							Wir machen Theater für Jugendliche greifbar und erfahrbar. In
							Kursen lernen die Jugendlichen Grundlagen des Theaterspielens
							kennen. Gleichzeitig wird ein Gespür dafür entwickelt, was es
							heißt, sich eine Meinung zu bilden, mitzudenken und sich kritisch
							zu positionieren. Denn nur ein Schauspieler mit einem kritischen
							Selbstbewusstsein schafft es, eine glaubhafte Wirklichkeit auf der
							Bühne zu erzeugen.
						</p>
					</div>
					<div class="my-4 w-full md:w-4/12 lg:mt-16">
						<div class="mx-auto size-72 lg:size-96">
							<NuxtImg
								src="/images/schimmelreiter-02.jpg"
								alt="Theater Jugend Hamburg"
								class="border-primary-600 my-8 h-full w-full rounded-none border object-cover object-left-top shadow-lg"
								loading="lazy"
								format="webp"
								quality="80"
								sizes="sm:100vw md:50vw lg:400px"
							/>
						</div>
					</div>
				</div>
			</section>

			<!-- SECTION : THEATER SCHULE -->
			<section id="theater-schule" class="mb-10 md:mb-24">
				<div class="mt-8 flex flex-row-reverse flex-wrap-reverse items-center">
					<div class="mx-auto w-full px-4 md:w-7/12">
						<div
							class="ring-primary-600 mb-4 h-11 w-11 flex-none rounded-none p-2 ring-1"
						>
							<Icon
								name="material-symbols:theater-comedy-rounded"
								class="text-primary-600 h-full w-full"
								aria-hidden="true"
							/>
						</div>
						<h3 class="mb-6">Theaterdeck Schule.</h3>
						<p>
							Die Kursarbeit der Theater Jugend bildet die Grundlage des
							Theaterdecks. Für Jugendliche im Alter von 9 bis 20 Jahren werden
							regelmäßig Einsteigerkurse angeboten. Diese geben einen
							umfassenden Einblick in die unterschiedlichsten Bereiche der
							Schauspielkunst. Anschließend können die Jugendlichen ihre
							Theaterlust im Rahmen verschiedener Aufbaukurse vertiefen. Die
							Angebote behandeln Themenbereiche wie Improvisation, Monologe oder
							„Körper und Sprache“. Diese Kurse werden ehrenamtlich von
							professionellen Schauspielern und Regisseuren geleitet.
						</p>
						<p>
							Die zahlreichen Theaterproduktionen der Theater Jugend ermöglichen
							den Jugendlichen die wichtige Erfahrung, das Gelernte auch vor
							Publikum umzusetzen. Gleichzeitig können die Jugendlichen auch in
							alle anderen Arbeiten, die bei einer Theaterproduktion anfallen,
							Einblick erhalten und selbst Hand anlegen. Dazu gehören Bühnenbau,
							Licht- und Tontechnik, Entwerfen der Werbung, der Programmhefte
							und vieles mehr. Im Rahmen von „Spieldeck“ haben Jugendliche
							bereits komplette Produktionen selbständig auf die Bühne gebracht.
						</p>
						<p>
							Die Theater Jugend bietet jede Menge Raum für die individuelle und
							gemeinschaftliche künstlerische Entfaltung. Wir bieten auch
							Jugendlichen mit Behinderung die Möglichkeit an unseren Kursen
							teilzunehmen.
						</p>
					</div>
					<div class="mx-auto my-4 w-full md:w-4/12 lg:mt-16">
						<div class="mx-auto size-72 lg:size-96">
							<NuxtImg
								src="/images/1-michelausloenneberga.jpg"
								alt="Theaterdeck Schule"
								class="border-primary-600 my-8 h-full w-full rounded-none border object-cover shadow-lg"
								loading="lazy"
								format="webp"
								quality="80"
								sizes="sm:100vw md:50vw lg:400px"
							/>
						</div>
					</div>
				</div>
			</section>

			<hr class="mx-auto my-20 w-6" />

			<!-- SECTION: OUR TEAM -->
			<!-- <section id="theater-team" class="mb-10 md:mb-24">
				<div
					class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
				>
					<div class="max-w-2xl">
						<h3 class="mb-6">Unser Team</h3>
						<p class="text-lg leading-8">
							Unser engagiertes Team besteht aus leidenschaftlichen
							Theaterpädagogen, die mit Herzblut Theaterkurse leiten und die
							kreativen Talente Ihrer Kinder fördern. Lernen Sie unser Team
							kennen und entdecken Sie die inspirierende Welt des Theaters mit
							uns!
						</p>
					</div>
					<ul
						role="list"
						class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
					>
						<li v-for="person in people" :key="person.name">
							<div class="flex items-center gap-x-6">
								<NuxtImg
									:src="person.imageUrl"
									:alt="person.name"
									class="h-16 w-16 rounded object-cover"
									loading="lazy"
									format="webp"
									quality="80"
									sizes="sm:100vw md:50vw lg:400px"
								/>
								<div>
									<h3
										class="text-base font-semibold leading-7 tracking-tight text-gray-900"
									>
										{{ person.name }}
									</h3>
									<p class="text-primary-500 text-sm font-semibold leading-6">
										{{ person.role }}
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section> -->

			<!-- <hr class="mx-auto my-20 w-6" /> -->

			<!-- SECTION : COURSES -->
			<UContainer id="theater-course-list" class="mb-10">
				<p class="text-primary-500 text-base font-semibold leading-7">
					Einblick und Überblick für Theaterbesessene
				</p>
				<h3 class="mb-6">Unsere Kurse.</h3>
				<p class="text-lg leading-8">
					Die StartDECK Kurse sind Einsteigerkurse, die euch und uns die
					Möglichkeit geben sollen uns gegenseitig kennenzulernen. In sechs
					Terminen machen die Teilnehmer:innen erste Schritte auf der Bühne,
					lernen jede Menge Tricks und können sich in kleinen Szenen
					ausprobieren. Im Anschluss an die StartDECK Kurse folgen unmittelbar
					die StartDECKpro Kurse, in denen wir Themen vertiefen, jede Menge
					Improvisationen spielen und größere Szenen erarbeiten. Je nach
					Situation können Kurse im Anschluss an das StartDECK-Programm zu
					festen Ensembles, den SpielDECKs werden. Ensembles treffen sich
					wöchentlich für 1,5 Stunden, um Techniken zu verfeinern, Themen zu
					bearbeiten und in verschiedenen Produktionen auf die Bühne zu
					springen.
				</p>
				<UCard
					v-for="post in kurse"
					:key="post.id"
					class="mb-8 mt-8"
					:ui="{
						rounded: 'rounded-none',
						ring: 'ring-primary',
						divide: 'divide-primary',
						background: 'bg-background',
					}"
				>
					<template #header>
						<div class="flex items-center justify-between">
							<h3 class="text-xl">{{ post.title }}</h3>
							<UBadge color="primary">{{ post.category.title }}</UBadge>
						</div>
					</template>
					<p>{{ post.description }}</p>
					<template #footer>
						<div class="flex items-center gap-4">
							<UAvatar
								size="xl"
								:ui="{ rounded: 'rounded' }"
								:src="post.author.imageUrl"
								:alt="post.author.name"
							/>
							<div>
								<p class="font-semibold">{{ post.author.name }}</p>
								<p class="text-sm">{{ post.author.role }}</p>
							</div>
						</div>
					</template>
				</UCard>
				<UDivider class="my-8" />
				<p>
					Bitte melden Sie sich über unser Kontaktformular an oder schreiben uns
					direkt an:
					<UButton
						to="mailto:kurse@theaterdeck.de"
						color="primary"
						class="text-base"
						variant="link"
					>
						kurse@theaterdeck.de
					</UButton>
				</p>
				<p class="mt-4 font-semibold">
					* Die Kurse werden gefördert vom Amt für Familie
				</p>
			</UContainer>
		</main>
		<TheNewsletter />
	</div>
</template>

<script setup lang="ts">
	/**
	 * PAGE: schule.vue
	 *
	 * Information about the Theater Jugend and Kurse.
	 */

	import heroimage from '../assets/images/hero-highkey-sr.jpg';
	import { kurse } from '~/server/data/kurse';

	// const people = [
	// 	{
	// 		name: 'Niklas Heinecke',
	// 		role: 'Theaterleiter',
	// 		imageUrl: '/images/kursleiter/Niklas.jpg',
	// 	},
	// 	{
	// 		name: 'Anne Pretzsch',
	// 		role: 'Theater Performance',
	// 		imageUrl: '/images/kursleiter/Anne.jpg',
	// 	},
	// 	{
	// 		name: 'Marietta Saggau',
	// 		role: 'Kindertheater',
	// 		imageUrl: '/images/kursleiter/Marietta.jpg',
	// 	},
	// 	{
	// 		name: 'Leena Fahje',
	// 		role: 'Kursleiterin',
	// 		imageUrl: '/images/kursleiter/Leena.jpg',
	// 	},
	// 	{
	// 		name: 'Thorsten Grübling',
	// 		role: 'Kursleiter',
	// 		imageUrl: '/images/kursleiter/Thorsten.jpg',
	// 	},
	// 	{
	// 		name: 'Enrico Guzy',
	// 		role: 'Improtheater',
	// 		imageUrl: '/images/kursleiter/Enrico.jpg',
	// 	},
	// ];
	// Example portraits from Unsplash
	// 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
</script>

<style scoped></style>

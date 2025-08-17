<template>
	<div>
		<PageHero title="Theaterschule" :background-image="`url(${heroimage})`" />

		<main class="mx-auto max-w-7xl">
			<!-- SECTION : Theaterschule -->
			<section
				id="theaterschule"
				class="scroll-mt-24"
				aria-labelledby="theaterschule-heading"
			>
				<div class="mx-auto px-4 py-8 sm:px-6 lg:px-8">
					<div class="ml-4 flex items-center gap-4">
						<Icon
							name="mdi:drama-masks"
							class="text-primary-600 h-7 w-7"
							aria-hidden="true"
						/>
						<h3 id="theaterschule-heading" class="tracking-tight">
							Unsere Theaterschule.
						</h3>
					</div>

					<div class="bg-primary-600/80 mt-3 h-1 w-32 rounded-none" />

					<div
						class="border-primary-600/70 dark:border-primary-400/60 mt-8 rounded-none border-l-4 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
					>
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
				</div>
			</section>

			<div class="text-primary-600 my-8 flex items-center justify-center">
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
			</div>

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
</script>

<style scoped></style>

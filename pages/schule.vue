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
				<div
					class="mb-6 flex flex-col items-center justify-between md:flex-row"
				>
					<p class="basis-2/3 text-lg leading-8">
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
					<!-- CTA Button -->
					<div class="flex w-full items-center justify-center gap-6 md:w-1/3">
						<Icon
							name="heroicons:arrow-right-20-solid"
							class="h-16 w-16 rotate-6 text-theme-accent md:hidden"
							aria-hidden="true"
						/>
						<NuxtLink
							:to="`/kontakt`"
							aria-label="Tickets"
							class="group inline-block h-40 w-40 -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105 md:bottom-8 md:mx-auto xl:h-56 xl:w-56"
						>
							<svg
								viewBox="82 96 314 293"
								xmlns="http://www.w3.org/2000/svg"
								class="pointer-events-none h-full w-full drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
							>
								<path
									fill="#fac218"
									class="pointer-events-auto"
									d="M395.712,240 Q368.5593873417986,305.60819706018026 362.9980088455405,319.04602055443405 Q306.6236043716255,353.5373956448795 295.0770395998598,360.60189415738034 Q231.54048958776613,384.4612774860368 218.52697934432527,389.3481391316652 Q155.9583522768417,358.1656136442555 143.14309131121254,351.7788313155089 Q109.4718535422772,292.4941649471893 102.57533496309767,280.3515224380154 Q85.82579700063415,208.44988710065365 82.3951687432621,193.72304612794102 Q129.61592592324243,135.6634695746937 139.28764727335889,123.7717490758358 Q205.80172882881897,101.46686268394083 219.4250949305397,96.89839197716717 Q290.70952600611963,96.97538442874782 305.3099516481059,96.99115396702337 Q349.3054720253195,152.5774014614045 358.31660270498975,163.96253649037413 Q389.35478245984825,227.0736312033636 395.712,240 Z"
								/>
							</svg>
							<div
								class="group-hover:text-primary-400 pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-xl font-semibold uppercase text-background lg:text-2xl"
							>
								<span>MITMACHEN</span>
							</div>
						</NuxtLink>
						<Icon
							name="heroicons:arrow-left-20-solid"
							class="mb-8 h-16 w-16 -rotate-6 text-theme-accent md:hidden"
							aria-hidden="true"
						/>
					</div>
				</div>
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
								:ui="{
									rounded: 'rounded-none',
								}"
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

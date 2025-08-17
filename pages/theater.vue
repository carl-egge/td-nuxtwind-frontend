<template>
	<div>
		<PageHero
			title="Theaterdeck Hamburg"
			:background-image="`url(${heroimage})`"
		/>

		<main class="mx-auto max-w-7xl">
			<!-- SECTION : Über Uns -->
			<section
				id="ueber-uns"
				class="scroll-mt-24"
				aria-labelledby="ueber-uns-heading"
			>
				<div class="mx-auto px-4 py-8 sm:px-6 lg:px-8">
					<div class="ml-4 flex items-center gap-4">
						<Icon
							name="mdi:drama-masks"
							class="text-primary-600 h-7 w-7"
							aria-hidden="true"
						/>
						<h3 id="ueber-uns-heading" class="tracking-tight">Über uns.</h3>
					</div>

					<div class="bg-primary-600/80 mt-3 h-1 w-32 rounded-none" />

					<div
						class="border-primary-600/70 dark:border-primary-400/60 mt-8 rounded-none border-l-4 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
					>
						<p>
							Das Theaterdeck Hamburg ist ein lebendiger Treffpunkt für kreative
							Köpfe jeden Alters – mitten im Kulturzentrum Zinnschmelze, nur
							wenige Schritte vom U- und S-Bahnhof Barmbek entfernt. Seit seiner
							Wiedereröffnung im Jahr 2015 ist das Theaterdeck ein fester
							Bestandteil der Hamburger Kulturlandschaft. Mit einem vielseitigen
							Programm aus Theaterstücken, Workshops und Kursen lädt es zu
							künstlerischem Entdecken und gemeinsamen Erleben ein: Ob
							professionell inszenierte Stücke oder Improvisationstheater für
							Jugendliche, alle Angebote sind geprägt von Leidenschaft,
							Engagement und künstlerischer Vielfalt. Herzlich, inklusiv und
							immer im Dialog – das Theaterdeck Hamburg macht Theater greifbar
							und inspiriert Menschen jeden Alters.
						</p>
					</div>
				</div>
			</section>

			<!-- SECTION : THEATER Jugend -->
			<section
				id="theater-jugend"
				class="scroll-mt-24"
				aria-labelledby="jugend-heading"
			>
				<div class="mx-auto px-4 py-8 sm:px-6 lg:px-8">
					<div class="ml-4 flex items-center gap-4">
						<Icon
							name="mdi:account-group"
							class="text-primary-600 h-7 w-7"
							aria-hidden="true"
						/>
						<h3 id="theater-jugend-heading" class="tracking-tight">
							Theater Jugend Hamburg e.V.
						</h3>
					</div>

					<div class="bg-primary-600/80 mt-3 h-1 w-32 rounded-none" />

					<div
						class="border-primary-600/70 dark:border-primary-400/60 mt-8 rounded-none border-l-4 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
					>
						<p>
							Die 1983 gegründete
							<strong>Theater Jugend Hamburg e.V.</strong>
							ist eine Theaterschule mit Vision und seit September 2012 fester
							Bestandteil und Grundbaustein des Theaterdecks. Das Kursangebot
							ist speziell auf Jugendliche, auch Jugendliche mit Behinderung,
							zugeschnitten und bietet den Einstieg in die Theaterwelt. Neben
							Jugendproduktion und altersübergreifenden Inszenierungen bietet
							die Theater Jugend eine eigene Plattform für junge Regisseure –
							das
							<em>Spieldeck</em>
							.
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
				</div>
			</section>

			<div class="text-primary-600 my-8 flex items-center justify-center">
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
			</div>

			<!-- SECTION: OUR TEAM -->
			<section id="theater-team" class="mb-10 md:mb-24">
				<div
					class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
				>
					<div class="max-w-2xl">
						<h3 class="mb-6">Das Sind Wir.</h3>
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
			</section>
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
	import { people } from '~/server/data/people';
</script>

<style scoped></style>

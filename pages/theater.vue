<template>
	<div>
		<PageHero
			title="Theaterdeck Hamburg"
			:background-image="`url(${heroimage})`"
		/>

		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<!-- SECTION : Über Uns -->
			<section
				id="ueber-uns"
				class="scroll-mt-24"
				aria-labelledby="ueber-uns-heading"
			>
				<div class="mx-auto px-4 py-8 sm:px-6 lg:px-8">
					<Icon
						name="hugeicons:curtains"
						class="text-primary-600 h-7 w-7"
						aria-hidden="true"
					/>
					<h3 id="ueber-uns-heading" class="tracking-tight">Über Uns.</h3>

					<div
						class="border-primary-600/70 mt-8 rounded-none border-l-4 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
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
					<Icon
						name="fluent:people-team-20-filled"
						class="text-primary-600 h-7 w-7"
						aria-hidden="true"
					/>
					<h3 id="theater-jugend-heading" class="tracking-tight">
						Theater Jugend Hamburg e.V.
					</h3>

					<div
						class="border-primary-600/70 mt-8 rounded-none border-l-4 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
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
			<section id="theater-team" class="mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<p class="text-primary-500 text-base font-semibold leading-7">
					Lerne die Landratten und Leichtmatrosen kennen
				</p>
				<h3 class="mb-6">Unsere Mannschaft.</h3>
				<p>
					Unser engagiertes Team besteht aus leidenschaftlichen
					Theaterpädagogen, die mit Herzblut Theaterkurse leiten und die
					kreativen Talente Ihrer Kinder fördern. Lernen Sie unser Team kennen
					und entdecken Sie die inspirierende Welt des Theaters mit uns!
				</p>

				<div
					class="mt-4 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2"
				>
					<TheCard
						:src="people[0].imageUrl"
						:title="people[0].name"
						:subtitle="people[0].role"
						:details="people[0].description"
					/>
					<TheCard
						:src="people[1].imageUrl"
						:title="people[1].name"
						:subtitle="people[1].role"
						:details="people[1].description"
					/>
				</div>

				<!-- <div class="flex flex-wrap">
					<UCard class="basis-1/2">
						<NuxtImg
							:src="people[0].imageUrl"
							:alt="people[0].name"
							loading="lazy"
							format="webp"
							quality="80"
						/>
					</UCard>
				</div>
				<UCard
					:ui="{
						base: 'border border-primary-600',
						background: 'bg-primary-600',
						rounded: 'rounded-none',
						shadow: 'shadow-md',
						body: {
							padding: 'p-0',
						},
					}"
					class="group relative m-0 flex h-96 w-96 rounded-none p-0 shadow-md sm:mx-auto sm:max-w-lg"
				>
					<div
						class="z-10 h-full w-full overflow-hidden rounded-none border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
					>
						<img
							src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
							class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
							alt=""
						/>
					</div>
					<div
						class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110"
					>
						<h1 class="font-serif text-2xl font-bold text-white shadow-xl">
							Azores
						</h1>
						<h1 class="text-sm font-light text-gray-200 shadow-xl">
							A Little Paradise in Portugal
						</h1>
					</div>
				</UCard> -->
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

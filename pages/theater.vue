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
				<div class="mx-auto py-8 md:px-4 lg:px-8">
					<Icon
						name="mingcute:lighthouse-line"
						class="text-primary-600 h-7 w-7"
						aria-hidden="true"
					/>
					<h3 id="ueber-uns-heading" class="tracking-tight">Über Uns.</h3>

					<div
						class="border-primary-600/70 mt-8 rounded-none border-l-4 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
					>
						<p>
							Das
							<b>Theaterdeck Hamburg</b>
							ist ein lebendiger Treffpunkt für kreative Köpfe jeden Alters –
							mitten im Kulturzentrum Zinnschmelze, nur wenige Schritte vom U-
							und S-Bahnhof Barmbek entfernt. Seit seiner Wiedereröffnung im
							Jahr 2015 ist das Theaterdeck ein fester Bestandteil der Hamburger
							Kulturlandschaft. Mit einem vielseitigen Programm aus
							Theaterstücken, Workshops und Kursen lädt es zu künstlerischem
							Entdecken und gemeinsamen Erleben ein: Ob professionell
							inszenierte Stücke oder Improvisationstheater für Jugendliche,
							alle Angebote sind geprägt von Leidenschaft, Engagement und
							künstlerischer Vielfalt.
							<i>Herzlich, inklusiv und immer im Dialog</i>
							– das Theaterdeck Hamburg macht Theater greifbar und inspiriert
							Menschen jeden Alters.
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
				<div class="mx-auto py-8 md:px-4 lg:px-8">
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
			<section id="theater-team" class="mx-auto py-8 md:px-4 lg:px-8">
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
						v-for="(person, idx) in people"
						:key="idx"
						:src="person.imageUrl"
						:title="person.name"
						:subtitle="person.role"
						:details="person.description"
					/>
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

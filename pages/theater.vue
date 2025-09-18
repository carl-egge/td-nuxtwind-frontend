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
						name="td-icon:mingcute-lighthouse-line"
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
							ist ein lebendiger Ort für Kreativität und Begegnung – im Herzen
							von Barmbek, in der historischen Zinnschmelze. Seit seiner
							Wiedereröffnung 2015 bereichert es die Hamburger Kulturszene mit
							Energie, Vielfalt und Offenheit. Auf dem Spielplan stehen
							Theaterstücke, Workshops und Kurse, die Lust machen, Neues
							auszuprobieren und gemeinsam Kunst zu erleben. Ob professionell
							inszenierte Produktionen oder Improvisationstheater für
							Jugendliche – hier trifft Leidenschaft auf Engagement, Spielfreude
							auf künstlerische Vielfalt.
							<i>Offen, inklusiv und immer im Austausch:</i>
							Wir machen Theater mit liebe zum Detail und dem Ton der mitten ins
							Herz trifft.
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
						name="td-icon:mingcute-group-fill"
						class="text-primary-600 h-7 w-7"
						aria-hidden="true"
					/>
					<p class="text-primary-500 text-base font-semibold leading-7">
						Bühne frei für junge Talente!
					</p>
					<h3 id="theater-jugend-heading" class="tracking-tight">
						Theater Jugend Hamburg e.V.
					</h3>

					<div
						class="border-primary-600/70 mt-8 rounded-none border-l-4 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
					>
						<p>
							Seit 1983 bringt die
							<b>Theater Jugend Hamburg e.V.</b>
							frischen Wind in die Hamburger Theaterszene – mit Leidenschaft,
							Vision und dem klaren Ziel, Theater für Kinder und Jugendliche
							zugänglich und lebendig zu machen. Als
							<i>anerkannter Träger der freien Jugendhilfe</i>
							setzt der Verein konsequent auf
							<i>kulturellen und ästhetischen Zugang,</i>
							um jungen Menschen neue Perspektiven zu eröffnen und ihre kreative
							Teilhabe zu fördern.
						</p>
						<p>
							Seit 2012 ist die Theater Jugend Hamburg e.V. das Herzstück des
							<b>TheaterDecks</b>
							und bietet dort ein vielfältiges und inklusives Kursprogramm, das
							sich gezielt an Jugendliche richtet. Das Projekt wird
							<i>vom Amt für Familie gefördert</i>
							und bildet eine verlässliche Grundlage für ein dauerhaft
							vielfältiges Kinder- und Jugendangebot in Hamburg.
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
					Auf´s Deck mit unseren Kurs-Kapitän:innen
				</p>
				<h3 class="mb-6">Unsere Mannschaft.</h3>
				<p>
					Unser engagiertes Team besteht aus leidenschaftlichen
					<!-- prettier-ignore -->
					<b>Regisseur<em>innen</em>, <em>Schauspieler</em>innen und Theaterpädagog:innen,
					</b>
					die mit Herzblut Theaterkurse leiten und deine kreativen Talente
					fördern. Lerne uns kennen und entdecke gemeinsam mit uns die
					inspirierende Welt des Theaters!
				</p>

				<div
					class="mt-8 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2"
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

	import heroimage from '../assets/images/sw/theaterdeck.jpg';
	import { people } from '~/server/data/people';
</script>

<style scoped></style>

<template>
	<div>
		<PageHero
			title="Vermietung"
			:background-image="`url(${heroimage})`"
			:background-position="`center right`"
		/>

		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<!-- SECTION : Vermietung -->
			<section
				id="vermietung"
				class="my-4 scroll-mt-24"
				aria-labelledby="vermietung-ueberschrift"
			>
				<Icon
					name="td-icon:huge-icons-curtains"
					class="text-primary-600 h-7 w-7"
					aria-hidden="true"
				/>
				<p class="text-primary-500 text-base font-semibold leading-7">
					Dein Event. Deine Bühne. Mitten in Barmbek.
				</p>
				<h3 id="unser-deck" class="tracking-tight">Unser Deck.</h3>
				<div
					class="border-primary-600/70 mt-8 rounded-none border-l-4 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
				>
					<p>
						Du suchst einen besonderen Ort für Deinen großen Moment? Unser
						Theatersaal im Herzen von Barmbek ist mehr als nur eine Location –
						er ist ein Raum voller Atmosphäre, Kreativität und Möglichkeiten. Ob
						Hochzeit, Seminar, Trauung, Theateraufführung, Firmenfeier oder
						etwas ganz anderes: Bei uns trifft stilvolles Ambiente auf
						professionelle Technik und persönliche Betreuung. Lust auf
						unvergessliche Momente? Dann komm an DECK – und lasse Deine Vision
						Wirklichkeit werden!
					</p>
				</div>
			</section>

			<div class="text-primary-600 my-8 flex items-center justify-center">
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
			</div>

			<!-- SECTION : Kacheln -->
			<section
				id="saele"
				class="my-8 grid scroll-mt-24 grid-cols-1 place-items-center gap-4 md:grid-cols-2"
				aria-labelledby="vermietung-ueberblick"
			>
				<TheCard
					:src="rooms[0].imageUrl"
					:title="rooms[0].name"
					:subtitle="rooms[0].role"
					icon="game-icons:shooner-sailboat"
					:details="rooms[0].description"
				>
					<template #details>
						<div class="border border-background p-4">
							<ul
								class="list-disc list-none space-y-2 font-light text-background"
							>
								<li>
									<i>Kapazität:</i>
									ideal für kleinere und größere Veranstaltungen zwischen 15 und
									70 Personen (bei reinen Tanzveranstaltung auch mehr)
								</li>
								<li>
									<i>Ausstattung:</i>
									Tonanlage, Beamer, Leinwand, Licht, Flipchart etc.
								</li>
								<li>
									<i>inkl. Bühne:</i>
									mind. 4 × 4 m
								</li>
								<li>
									<i>Raummiete:</i>
									ab 510 €
									<em>(Basistarif ohne Technik)</em>
								</li>
							</ul>
						</div>
					</template>
				</TheCard>
				<TheCard
					:src="rooms[1].imageUrl"
					:title="rooms[1].name"
					:subtitle="rooms[1].role"
					icon="game-icons:sailboat"
					:details="rooms[1].description"
				>
					<template #details>
						<div class="border border-background p-4">
							<ul
								class="list-disc list-none space-y-2 font-light text-background"
							>
								<li>
									<i>Kapazität:</i>
									ideal für kleinere Zusammenkünfte, Feiern, Seminare und
									Meetings
								</li>
								<li>
									<i>Ausstattung:</i>
									Tonanlage, Beamer, Leinwand, Licht, Flipchart etc.
								</li>
								<li>Auch als Erweiterung zu Deck I buchbar</li>
								<li>
									<i>Raummiete:</i>
									ab 260 €
									<em>(Basistarif ohne Technik)</em>
								</li>
							</ul>
						</div>
					</template>
				</TheCard>
			</section>

			<div class="text-primary-600 my-8 flex items-center justify-center">
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
			</div>

			<!-- SECTION: Vermietung Fragen -->
			<section
				id="vermietung-kontakt"
				aria-labelledby="vermietung-kontakt"
				class="my-4"
			>
				<p class="text-primary-500 text-base font-semibold leading-7">
					Für alle die Raum brauchen
				</p>
				<h3 class="mb-6">Noch Fragen? Kein Problem.</h3>
				<p>
					Nutze die Chance, unsere Räume im Theaterdeck Hamburg für Deine
					Veranstaltung zu mieten – egal ob einmalig oder regelmäßig.
				</p>
				<p>
					Für kulinarische Begleitung ist ebenfalls gesorgt: In Zusammenarbeit
					mit dem Lüttliv bieten wir Dir die Möglichkeit, Deine Feier mit
					individuellem Catering abzurunden.
				</p>
				<p>
					Am einfachsten meldest Du Dich direkt über unser
					<NuxtLink
						to="/kontakt"
						class="hover:text-primary-500 font-normal text-text"
					>
						Kontaktformular
					</NuxtLink>
					– dort kannst Du uns Deine Wünsche und Ideen mitteilen. Bei weiteren
					Fragen sind wir natürlich auch telefonisch unter
					<NuxtLink
						href="tel:0406321322"
						class="hover:text-primary-500 font-normal text-text"
					>
						040 6321322
					</NuxtLink>
					oder per Mail an
					<NuxtLink
						class="hover:text-primary-500 font-normal text-text"
						href="mailto:vermietung@theaterdeck.de"
					>
						vermietung@theaterdeck.de
					</NuxtLink>
					erreichbar.
				</p>
				<p>
					Wir freuen uns darauf, gemeinsam mit Dir unvergessliche
					Veranstaltungen zu gestalten!
				</p>
				<div class="my-10 flex flex-wrap justify-center gap-x-8 gap-y-2">
					<UButton
						variant="outline"
						color="primary"
						to="https://luettliv.de/events"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-none px-12 py-3"
					>
						Zum Luettliv
					</UButton>
					<UButton
						color="primary"
						to="/td-vermietung-infos-2024.pdf"
						target="_blank"
						rel="noopener noreferrer"
						class="m-0 rounded-none px-12 py-3"
					>
						Alle Details
					</UButton>
				</div>
				<p class="mb-4 text-base">
					* Es gelten die
					<NuxtLink
						class="hover:text-primary-500 font-normal text-text"
						to="/datenschutz"
					>
						Allgemeinen Geschäftsbedingungen
					</NuxtLink>
				</p>
			</section>
		</main>
		<TheNewsletter />
	</div>
</template>

<script setup lang="ts">
	/**
	 * RaumMIETE Komponente
	 *
	 * Diese Komponente zeigt Informationen zur Vermietung von Räumen im Theaterdeck an.
	 * Sie enthält einen Hero-Bereich, Detailinformationen zu den Räumlichkeiten und Kontaktmöglichkeiten.
	 */

	import heroimage from '~/assets/images/sw/vermietung.jpg';
	const rooms = [
		{
			name: 'Deck I',
			role: 'Großer Saal (ca. 100 m²)',
			imageUrl: '/images/Zinnschmelze_HH-Barmbek_2015_Osten.webp',
			description: 'Platz für große Events.',
		},
		{
			name: 'Deck II',
			role: 'Studiobühne (ca. 40 m²)',
			imageUrl: '/images/Zinnschmelze_HH-Barmbek_2015_Osten.webp',
			description: 'Proben und vieles mehr.',
		},
	];
</script>

<style scoped></style>

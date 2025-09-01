<template>
	<div>
		<PageHero title="Vermietung" :background-image="`url(${heroimage})`" />

		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<p class="text-primary-500 text-base font-semibold leading-7">
				Für alle die Raum brauchen
			</p>
			<h3>Unser Deck.</h3>
			<p class="mt-6 max-w-none text-lg leading-8">
				Hochzeiten || Geburtstage || Proben || Theaterproben ||
				Navigationstraining || Vorsprechvorbereitung || Monologarbeit || Camera
				Acting || Anlegemanöver || Sprechübungen || Bühnenpatent
			</p>
			<div
				class="my-4 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2"
			>
				<TheCard
					:src="rooms[0].imageUrl"
					:title="rooms[0].name"
					:subtitle="rooms[0].role"
					:details="rooms[0].description"
				>
					<template #details="{ title, details }">
						<div class="border border-background p-4">
							<h4 class="text-lg font-semibold">{{ title }}</h4>
							<p class="mt-2 text-sm/6 text-gray-100/90">
								{{ details }}
							</p>
						</div>
					</template>
				</TheCard>
				<TheCard
					:src="rooms[1].imageUrl"
					:title="rooms[1].name"
					:subtitle="rooms[1].role"
					:details="rooms[1].description"
				>
					<template #details>
						<div class="border border-background p-4">
							<ul class="list-disc ps-5 text-sm/6 text-gray-200/90">
								<li>40 Quadratmeter</li>
								<li>Leinwand</li>
								<li>Soundanlage</li>
							</ul>
						</div>
					</template>
				</TheCard>
			</div>
			<!-- <NuxtImg
				src="/images/Zinnschmelze_HH-Barmbek_2015_Osten.webp"
				alt="Unser Raum"
				class="border-primary-500 my-4 max-h-[32rem] w-full rounded-none border bg-background object-cover shadow-lg"
				width="912"
				height="600"
				format="webp"
				quality="80"
				loading="lazy"
			/> -->
			<p class="my-10">
				Entdecken Sie den perfekten Veranstaltungsort für Ihre Träume in
				Barmbek! Unser vielfältiger Theatersaal bietet eine charmante
				Atmosphäre, eine einladende Bühne und eine umfangreiche technische
				Grundausstattung. Egal, ob Sie eine Hochzeit, eine Vorstellung oder ein
				Firmenevent planen – bei uns wird Ihre Veranstaltung unvergesslich.
				Mieten Sie noch heute unseren einzigartigen Theatersaal und verwandeln
				Sie Ihre Ideen in unvergessliche Momente!
			</p>
			<ul
				role="list"
				class="m-4 space-y-8 text-gray-700 lg:m-14"
				aria-label="Vermietungsoptionen"
			>
				<li class="flex gap-x-3">
					<!-- <Icon name="mdi:bank" class="mt-1 flex-none h-5 w-5 text-accent"
                                            aria-hidden="true" /> -->
					<!-- <Icon name="game-icons:shooner-sailboat" class="flex-none h-8 w-8 text-accent"
                                            aria-hidden="true" /> -->
					<div
						class="ring-primary-500 h-11 w-11 flex-none rounded-none p-2 ring-1"
					>
						<Icon
							name="game-icons:shooner-sailboat"
							class="text-primary-500 h-full w-full"
							aria-hidden="true"
						/>
					</div>
					<span>
						<strong class="text-primary-500 font-semibold uppercase">
							Deck I
						</strong>
						(großerSaal | 100m²)*
						<br />
						montags bis donnerstags
						<br />
						10 bis 14 Uhr || inkl. Bühne (mind. 4m mal 4m) | kleine mobile
						Tonanlage | Arbeitslicht
					</span>
				</li>
				<li class="flex gap-x-3">
					<!-- <Icon name="game-icons:sailboat" class="flex-none h-6 w-6 text-accent"
                                            aria-hidden="true" /> -->
					<div
						class="ring-primary-500 h-11 w-11 flex-none rounded-none p-2 ring-1"
					>
						<Icon
							name="game-icons:sailboat"
							class="text-primary-500 h-4/5 w-full"
							aria-hidden="true"
						/>
					</div>
					<span>
						<strong class="text-primary-500 font-semibold uppercase">
							Deck II
						</strong>
						(Studiobühne | 40m²)*
						<br />
						montags bis donnerstags
						<br />
						10 bis 14 Uhr || inkl. kleine mobile Tonanlage | Arbeitslicht
					</span>
				</li>
				<li class="flex gap-x-3">
					<Icon
						name="mdi:dots-horizontal"
						class="text-primary-500 h-5 w-5 flex-none align-bottom"
						aria-hidden="true"
					/>
					<span>
						<strong class="text-primary-500 font-semibold uppercase">
							Was noch möglich ist
						</strong>
						(Regelmäßig oder einmalig) Hochzeiten | Geburtstage | Konfirmationen
						| Trauungen | und und und
					</span>
				</li>
			</ul>
			<p class="mt-8 text-base">
				Sämtliche Möglichkeiten und Konditionen unter:
				<NuxtLink
					class="hover:text-primary-500 font-normal text-text"
					href="https://luettliv.de/"
					target="_blank"
					rel="noopener noreferrer"
				>
					www.luettliv.de.
				</NuxtLink>
			</p>
			<p class="mb-4 text-base">
				* Es gelten die
				<NuxtLink
					class="hover:text-primary-500 font-normal text-text"
					to="/datenschutz"
				>
					Allgemeinen Geschäftsbedingungen
				</NuxtLink>
			</p>
			<hr class="mx-auto my-2 w-6" />
			<p class="text-primary-500 mb-4 mt-12 text-base font-semibold leading-7">
				Noch Fragen? Kein Problem.
			</p>
			<p>
				Nutze diese einzigartige Gelegenheit, unseren vielseitigen Theatersaal
				in Barmbek für deine Veranstaltung zu mieten. Unser Raum bietet die
				ideale Kulisse für unvergessliche Momente. Für Buchungsanfragen melde
				dich über unser
				<NuxtLink
					to="/kontakt"
					class="hover:text-primary-500 font-normal text-text"
				>
					Kontaktformular.
				</NuxtLink>
				Bei weiteren Fragen stehen wir dir gerne telefonisch unter
				<NuxtLink
					href="tel:0406321322"
					class="hover:text-primary-500 font-normal text-text"
				>
					040 6321322
				</NuxtLink>
				oder per E-Mail unter
				<NuxtLink
					class="hover:text-primary-500 font-normal text-text"
					href="mailto:vermietung@theaterdeck.de"
				>
					vermietung@theaterdeck.de
				</NuxtLink>
				zur Verfügung. Wir freuen uns darauf, deine Veranstaltungsträume wahr
				werden zu lassen!
				<br />
				<br />
				<!-- PDF Download Button -->
				<NuxtLink
					class="hover:text-primary-500 text-text underline"
					href="td-vermietung-infos-2024.pdf"
					target="_blank"
					rel="noopener noreferrer"
					download
				>
					Mehr Infos als PDF herunterladen
				</NuxtLink>
			</p>
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

	import heroimage from '~/assets/images/chairs-bw.jpg';
	const rooms = [
		{
			name: 'Deck I',
			role: 'Großer Saal mit Bühne',
			imageUrl: '/images/Zinnschmelze_HH-Barmbek_2015_Osten.webp',
			description: 'Platz für große Events.',
		},
		{
			name: 'Deck II',
			role: 'Probenraum',
			imageUrl: '/images/Zinnschmelze_HH-Barmbek_2015_Osten.webp',
			description: 'Proben und vieles mehr.',
		},
	];
</script>

<style scoped></style>

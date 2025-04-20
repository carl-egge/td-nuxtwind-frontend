<template>
	<div>
		<!-- Hero-Section -->
		<PageHero
			title="RaumMIETE"
			:breadcrumbs="breadcrumbs"
			:background-image="heroBackgroundImage"
			aria-label="Seitenkopf"
		/>
		<main class="p-0">
			<section
				class="relative isolate overflow-hidden px-6 py-12 sm:py-32 md:pl-6 md:pr-0 lg:overflow-visible"
				aria-label="Vermietung"
			>
				<div
					class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
				>
					<div
						class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8"
					>
						<div class="lg:pr-4">
							<div class="lg:max-w-lg">
								<p class="text-primary-500 text-base font-semibold leading-7">
									Für alle die einen Raum brauchen
								</p>
								<h3>
									<span class="uppercase">Theaterdeck</span>
									Raum
									<span class="uppercase">miete</span>
								</h3>
								<p class="mt-6 text-lg leading-8">
									Hochzeiten || Geburtstage || Proben || Theaterproben ||
									Navigationstraining || Vorsprechvorbereitung || Monologarbeit
									|| Camera Acting || Anlegemanöver || Sprechübungen ||
									Bühnenpatent
								</p>
							</div>
						</div>
					</div>
					<div
						class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
					>
						<!-- Nuxt Image für optimierte Bilddarstellung -->
						<NuxtImg
							src="/images/hero/hero-highkey-chairs.jpg"
							alt="Unser Raum"
							class="w-[48rem] max-w-none rounded-lg bg-text shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
							width="912"
							height="600"
							format="webp"
							quality="80"
							loading="lazy"
						/>
					</div>
					<div
						class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8"
					>
						<div class="lg:pr-4">
							<div class="text-base">
								<p>
									Entdecken Sie den perfekten Veranstaltungsort für Ihre Träume
									in Barmbek! Unser vielfältiger Theatersaal bietet eine
									charmante Atmosphäre, eine einladende Bühne und eine
									umfangreiche technische Grundausstattung. Egal, ob Sie eine
									Hochzeit, eine Vorstellung oder ein Firmenevent planen – bei
									uns wird Ihre Veranstaltung unvergesslich. Mieten Sie noch
									heute unseren einzigartigen Theatersaal und verwandeln Sie
									Ihre Ideen in unvergessliche Momente!
								</p>
								<ul
									role="list"
									class="mt-12 space-y-8 text-gray-700"
									aria-label="Vermietungsoptionen"
								>
									<li class="flex gap-x-3">
										<!-- <Icon name="mdi:bank" class="mt-1 flex-none h-5 w-5 text-accent"
                                            aria-hidden="true" /> -->
										<!-- <Icon name="game-icons:shooner-sailboat" class="flex-none h-8 w-8 text-accent"
                                            aria-hidden="true" /> -->
										<div
											class="ring-primary-500 h-11 w-11 flex-none rounded p-2 ring-1"
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
											10 bis 14 Uhr || inkl. Bühne (mind. 4m mal 4m) | kleine
											mobile Tonanlage | Arbeitslicht
										</span>
									</li>
									<li class="flex gap-x-3">
										<!-- <Icon name="game-icons:sailboat" class="flex-none h-6 w-6 text-accent"
                                            aria-hidden="true" /> -->
										<div
											class="ring-primary-500 h-11 w-11 flex-none rounded p-2 ring-1"
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
											10 bis 14 Uhr || inkl. kleine mobile Tonanlage |
											Arbeitslicht
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
											(Regelmäßig oder einmalig) Hochzeiten | Geburtstage |
											Konfirmationen | Trauungen | und und und
										</span>
									</li>
								</ul>
								<p class="mt-8">
									Sämtliche Möglichkeiten und Konditionen unter:
									<NuxtLink
										class="hover:text-primary-500 text-text"
										href="https://luettliv.de/"
										target="_blank"
										rel="noopener noreferrer"
									>
										www.luettliv.de.
									</NuxtLink>
								</p>
								<hr class="my-2" />
								<p>
									* Es gelten die
									<NuxtLink
										class="hover:text-primary-500 text-text"
										to="/datenschutz"
									>
										Allgemeinen Geschäftsbedingungen
									</NuxtLink>
								</p>
								<h4 class="mb-6 mt-16">Noch Fragen? Kein Problem.</h4>
								<p>
									Nutzen Sie diese einzigartige Gelegenheit, unseren
									vielseitigen Theatersaal in Barmbek für Ihre Veranstaltung zu
									mieten. Unser Raum bietet die ideale Kulisse für
									unvergessliche Momente. Bei Fragen oder für Buchungsanfragen
									stehen wir Ihnen gerne telefonisch unter
									<NuxtLink
										href="tel:0406321322"
										class="hover:text-primary-500 font-normal text-text"
									>
										040 6321322
									</NuxtLink>
									oder per E-Mail unter
									<NuxtLink
										class="hover:text-primary-500 font-normal text-text"
										href="mailto:info@theaterdeck.de"
									>
										info@theaterdeck.de
									</NuxtLink>
									zur Verfügung. Wir freuen uns darauf, Ihre
									Veranstaltungsträume wahr werden zu lassen!
								</p>
							</div>
						</div>
					</div>
				</div>
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

	import heroimage from '~/assets/images/hero-highkey-chairs.jpg';

	// TypeScript Interface für Breadcrumb-Objekte
	interface Breadcrumb {
		label: string;
		to: string;
	}

	// Reaktive Variablen
	const heroBackgroundImage = ref<string>(`url(${heroimage})`);

	// Breadcrumbs-Array mit TypeScript-Typisierung
	const breadcrumbs: Breadcrumb[] = [{ label: 'HOME', to: '/' }];
</script>

<style scoped></style>

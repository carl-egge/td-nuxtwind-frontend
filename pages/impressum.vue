<template>
	<div>
		<PageHero title="Impressum" :background-image="`url(${heroimage})`" />

		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<section id="imprint" class="my-4">
				<h3>Theaterdeck Hamburg.</h3>
				<p>
					Theaterdeck Hamburg (in der Zinnschmelze)
					<br />
					Maurienstraße 19
					<br />
					22305 Hamburg
					<br />
					<br />
					Telefon:
					<NuxtLink
						to="tel:0406121322"
						class="hover:text-primary-600 font-normal"
					>
						+49 (0)40 6121322
					</NuxtLink>
					<br />
					E-Mail:
					<NuxtLink
						to="mailto:info@theaterdeck.de"
						class="hover:text-primary-600 font-normal"
					>
						info@theaterdeck.de
					</NuxtLink>
					<br />
					Oder nutzen sie unser Kontaktformular
					<NuxtLink
						to="/kontakt"
						class="text-primary-500 hover:text-primary-300"
					>
						hier
					</NuxtLink>
					.
					<br />
					<br />
					Geschäftsführung: Niklas Heinecke
					<br />
					Steuer-Nr.: 43/090/02984
					<br />
					Beim Registergericht: Amtsgericht Hamburg
					<br />
					<br />
					Website: Carl Egge
					<br />
					<br />
					Das Impressum gilt für:
					<NuxtLink
						to="https://www.theaterdeck.de"
						target="_blank"
						class="hover:text-primary-300 font-normal underline"
					>
						https://www.theaterdeck.de
					</NuxtLink>
				</p>
			</section>
			<section id="address" class="mt-8">
				<p class="text-primary-500 text-base font-semibold leading-7">
					So Findest Du Uns.
				</p>
				<p>
					Das Theaterdeck Hamburg (in der Zinnschmelze) liegt nur ein paar
					Gehminuten vom S- und U-Bahnhof Barmbek entfernt. Ihren persönlichen
					Fahrplan können Sie gerne vom
					<NuxtLink
						to="https://www.hvv.de/linking-service/show/f7d9ab7c02a14cd7acb1968838be1e45"
						target="_blank"
						class="hover:text-primary-600 font-normal"
					>
						HVV
					</NuxtLink>
					erstellen lassen. Falls Sie mit dem Auto anreisen, finden Sie einige
					Parkplätze in der Nähe.
					<NuxtLink
						to="https://maps.google.com/maps?q=Theaterdeck&hl=de&sll=53.58586,10.04499&sspn=0.010012,0.033023&hq=Theaterdeck&t=m&z=16"
						target="_blank"
						class="hover:text-primary-600 font-normal"
					>
						Google Maps
					</NuxtLink>
					erstellt Ihnen gerne Ihre eigene Route. Die Parkplatzsituation ist
					insgesamt aber eher schwierig.
				</p>
				<div class="h-96 w-full">
					<div class="border-primary-600 h-full w-full border shadow-lg">
						<ClientOnly fallback-tag="span" fallback="Loading map...">
							<TheMap />
						</ClientOnly>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
	/**
	 * PAGE: impressum.vue
	 *
	 * Page for Imprint and Location Information.
	 */
	import heroimage from '../assets/images/hero-highkey-windschief.jpg';
</script>

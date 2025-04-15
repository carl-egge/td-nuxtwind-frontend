<template>
	<div>
		<PageHero
			title="Impressum"
			:breadcrumbs="[{ label: 'HOME', to: '/' }]"
			:background-image="`url(${heroimage})`"
		/>
		<main>
			<section id="imprint-address" class="my-4">
				<h2><span>Theaterdeck Hamburg</span></h2>
				<p>
					Maurienstraße 19
					<br />
					22305 Hamburg
				</p>
			</section>
			<section id="imprint-directions" class="my-8">
				<h2><span>Anreise</span></h2>
				<p>
					Das Theaterdeck Hamburg (in der Zinnschmelze) liegt nur ein paar
					Gehminuten vom S- und U-Bahnhof Barmbek entfernt. Ihren persönlichen
					Fahrplan können Sie gerne vom
					<NuxtLink
						to="https://www.hvv.de/linking-service/show/f7d9ab7c02a14cd7acb1968838be1e45"
						target="_blank"
						class="text-accent hover:text-text"
					>
						HVV
					</NuxtLink>
					erstellen lassen. Falls Sie mit dem Auto anreisen, finden Sie einige
					Parkplätze in der Nähe.
					<NuxtLink
						to="https://maps.google.com/maps?q=Theaterdeck&hl=de&sll=53.58586,10.04499&sspn=0.010012,0.033023&hq=Theaterdeck&t=m&z=16"
						target="_blank"
						class="text-accent hover:text-text"
					>
						Google Maps
					</NuxtLink>
					erstellt Ihnen gerne Ihre eigene Route. Die Parkplatzsituation ist
					insgesamt aber eher schwierig.
				</p>
			</section>
			<section id="imprint-contact" class="my-8">
				<h2><span>Kontakt</span></h2>
				<strong class="text-accent m-4 text-lg">
					<Icon name="material-symbols:phone-enabled" aria-hidden="true" />
					040 6321322
				</strong>
				<p class="mt-2">Unser Anrufbeantworter wird täglich abgehört.</p>
				<p>Persönlicher Kontakt: mo und do 10:00 bis 12:00</p>
				<p>
					Oder nutzen sie unser Kontaktformular
					<NuxtLink to="/kontakt" class="text-accent hover:text-text">
						hier
					</NuxtLink>
					.
				</p>
			</section>
			<section id="imprint-info" class="my-4">
				<h2><span>Impressum</span></h2>
				<p>
					<strong>Steuer Nr.</strong>
					43/090/02984
				</p>
				<p>
					<strong>Geschäftsführer:</strong>
					Niklas Heinecke
				</p>
				<p>
					<strong>Design und Umsetzung:</strong>
					Philip Beck und Carl Egge
				</p>
			</section>
		</main>
		<section id="imprint-map" class="bg-accent h-64 w-full p-8 text-center">
			<p>Here will be a map where the Theaterdeck is located.</p>
		</section>
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

<style lang="scss" scoped></style>

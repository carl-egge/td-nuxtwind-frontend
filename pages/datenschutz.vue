<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/no-v-html -->
<template>
	<div>
		<PageHero title="Datenschutz" :background-image="`url(${heroimage})`" />

		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<section id="rights-general" class="my-8">
				<h3>Allgemeine Hinweise.</h3>
				<p>
					Die folgenden Hinweise geben einen einfachen Überblick darüber, was
					mit Deinen personenbezogenen Daten passiert, wenn Du unsere Website
					besuchen. Personenbezogene Daten sind alle Daten, mit denen Du
					persönlich identifiziert werden kannst. Ausführliche Informationen zum
					Thema Datenschutz kannst Du unserer unter diesem Text aufgeführten
					Datenschutzerklärung entnehmen.
				</p>
			</section>

			<div class="text-primary-600 my-8 flex items-center justify-center">
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
			</div>

			<section id="rights-data-acquisition" class="my-8">
				<h3>Datenerfassung auf Unserer Website.</h3>
				<UAccordion
					color="primary"
					variant="outline"
					size="md"
					:ui="{
						item: {
							base: 'text-text font-light whitespace-pre-line',
							size: 'text-base',
							padding: 'pl-2',
						},
					}"
					:items="dataAcquisition"
				/>
			</section>

			<div class="text-primary-600 my-8 flex items-center justify-center">
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
			</div>

			<section id="rights-remarks" class="my-8">
				<h3>Allgemeine Hinweise und Pflichtinformationen.</h3>
				<UAccordion
					color="primary"
					variant="outline"
					size="md"
					:ui="{
						item: {
							base: 'text-text font-light whitespace-pre-line',
							size: 'text-base',
							padding: 'pl-2',
						},
					}"
					:items="generalRemarks"
				/>
			</section>

			<div class="text-primary-600 my-8 flex items-center justify-center">
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
				<span class="mx-1 h-1 w-1 rounded-full bg-current" />
			</div>

			<section id="rights-agb" class="my-8">
				<h3>AGB : Allgemeine Geschäftsbedingungen Theaterdeck Hamburg.</h3>
				<UAccordion
					color="primary"
					variant="outline"
					size="md"
					:ui="{
						item: {
							base: 'text-text font-light whitespace-pre-line',
							size: 'text-base',
							padding: 'pl-2',
						},
					}"
					:items="agb"
				/>
			</section>
		</main>
		<TheNewsletter />
	</div>
</template>

<script setup>
	/**
	 * PAGE: datenschutz.vue
	 *
	 * Page for Datenschutzerklärung.
	 */
	import heroimage from '../assets/images/sw/datenschutz.jpg';
	import { generalRemarks } from '~/server/data/generalRemarks';
	import { agb } from '~/server/data/agb';
	import { dataAcquisition } from '~/server/data/dataAcquisition';
</script>

<style scoped>
	.accordion-text {
		white-space: pre-line;
	}
</style>

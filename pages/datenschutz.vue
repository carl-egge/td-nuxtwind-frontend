<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/no-v-html -->
<template>
	<div>
		<PageHero
			title="Datenschutz"
			:breadcrumbs="[{ label: 'HOME', to: '/' }]"
			:background-image="`url(${heroimage})`"
		/>
		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<section id="rights-general" class="my-8">
				<h3>Allgemeine Hinweise.</h3>
				<p>
					Die folgenden Hinweise geben einen einfachen Überblick darüber, was
					mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
					besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
					persönlich identifiziert werden können. Ausführliche Informationen zum
					Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
					Datenschutzerklärung.
				</p>
			</section>
			<hr class="mx-auto my-2 w-6" />
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
			<hr class="mx-auto my-2 w-6" />
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
			<hr class="mx-auto my-2 w-6" />
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
	import heroimage from '../assets/images/hero-highkey-petterson.jpg';
	import { generalRemarks } from '~/server/data/generalRemarks';
	import { agb } from '~/server/data/agb';
	import { dataAcquisition } from '~/server/data/dataAcquisition';
</script>

<style scoped>
	.accordion-text {
		white-space: pre-line;
	}
</style>

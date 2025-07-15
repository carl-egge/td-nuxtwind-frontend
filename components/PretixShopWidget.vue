<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
	<div
		class="pretix-widget-container border-primary-500 mx-auto my-4 max-w-4xl border bg-white p-2 shadow-lg md:p-4"
	>
		<!-- The custom pretix-widget element -->
		<!-- Dynamically bind attributes using v-bind -->
		<pretix-widget v-bind="widgetAttributes" />

		<!-- Fallback content for browsers with JavaScript disabled -->
		<noscript>
			<div
				class="pretix-widget-info-message rounded-lg bg-red-100 p-4 text-center text-red-700"
			>
				JavaScript is disabled in your browser. To access our ticket shop
				without JavaScript, please
				<a
					:href="widgetEventUrl"
					target="_blank"
					class="text-red-800 underline hover:no-underline"
				>
					click here
				</a>
				.
			</div>
		</noscript>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useHead, useRuntimeConfig } from '#app';

	const props = defineProps<{
		eventSlug: string; // Required: The slug of your pretix event (e.g., 'democon')
		subeventId?: number; // Optional: The ID of a specific subevent to pre-select
	}>();

	// Access runtime configuration
	const config = useRuntimeConfig();
	const pretixBaseUrl = config.public.pretixBaseUrl;

	// Construct the full event URL for the widget
	const widgetEventUrl = computed(() => {
		return `${pretixBaseUrl}/td/${props.eventSlug}/`;
	});

	// Determine widget attributes based on props
	const widgetAttributes = computed(() => {
		const attrs: { [key: string]: string | boolean | number } = {
			event: widgetEventUrl.value,
		};
		// If subeventId is provided, add it and default to calendar view
		if (props.subeventId) {
			attrs['subevent'] = props.subeventId;
			// As per documentation, if subevent is passed, it should default to calendar view
			// if a date is not passed. Here we are pre-selecting a subevent, so calendar view
			// is a good default for event series.
			attrs['list-type'] = 'calendar';
			attrs['display-event-info'] = 'true';
		} else {
			// If no subeventId, explicitly set to calendar view as per requirement
			attrs['list-type'] = 'calendar';
		}
		return attrs;
	});

	// Use useHead to inject the necessary stylesheet and script globally
	// These will only be added once to the document head, even if multiple widgets are used.
	useHead({
		link: [
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: `${widgetEventUrl.value}widget/v2.css`,
				crossorigin: '',
			},
		],
		script: [
			{
				type: 'text/javascript',
				src: `${pretixBaseUrl}/widget/v2.de.js`,
				async: true,
				crossorigin: '',
			},
		],
	});
</script>

<style scoped>
	/* Scoped styles for the pretix widget container */
	/* .pretix-widget-container {
		font-family: 'Inter', sans-serif;
	} */

	/* You can add custom styles to override pretix widget defaults if necessary,
   but be mindful of accessibility as per the documentation.
   Example:
   :deep(.pretix-widget-button) {
     background-color: #4CAF50 !important;
     color: white !important;
     border-radius: 8px !important;
   }
*/
</style>

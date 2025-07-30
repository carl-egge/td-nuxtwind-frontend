<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
	<div
		class="pretix-widget-container border-primary-500 mx-auto my-4 max-w-7xl border bg-white p-2 shadow-lg md:p-4"
	>
		<!-- The custom pretix-widget element -->
		<!-- Dynamically bind attributes using v-bind -->
		<pretix-widget ref="widgetEl" v-bind="widgetAttributes" />

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
	import { computed, ref, watch } from 'vue';
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

	// Ref for the pretix widget element
	const widgetEl = ref<HTMLElement | null>(null);
	// Ref for the pretix widget attributes
	const widgetAttributes = ref<{
		[key: string]: string | boolean | number;
	}>({
		event: widgetEventUrl.value,
		'list-type': 'calendar', // Default to calendar view
		'display-event-info': 'false', // Show event info by default
	});

	// Allow parent to call refresh() via ref
	defineExpose({ refresh });

	// Optionally auto-refresh when props change
	watch(() => props.eventSlug, buildWidget);

	// On mount, build widgets manually
	onMounted(() => {
		buildWidget();
	});

	function buildWidget(listType: string = 'calendar') {
		let attr: {
			[key: string]: string | boolean | number;
		} = {
			event: widgetEventUrl.value,
			'list-type': listType, // Use the provided listType or default to 'calendar'
			'display-event-info': 'false', // Show event info by default
		};
		// If subeventId is provided, add it to the attributes
		if (props.subeventId) {
			attr = {
				...attr,
				subevent: props.subeventId,
				'display-event-info': 'true', // Show event info by default
			};
		}
		// Update the widget attributes
		widgetAttributes.value = attr;
		// If the widget is already mounted, refresh it
		if (widgetEl.value) {
			// @ts-expect-error PretixWidget is a global object provided by the script
			window.PretixWidget?.buildWidgets();
		}
	}

	// Expose a refresh method to parent component
	function refresh(action: string = 'reload') {
		if (action === 'all') {
			return buildWidget('list');
		}
		return buildWidget();

		// if (!widgetEl.value) return;
		// console.debug(
		// 	'Refreshing pretix widget with attributes:',
		// 	widgetAttributes.value
		// );
		// // Replace the old widget with a fresh one
		// const oldEl = widgetEl.value;
		// const newEl = document.createElement('pretix-widget');
		// // Apply current attributes
		// Object.entries(widgetAttributes.value).forEach(([key, val]) => {
		// 	newEl.setAttribute(key, String(val));
		// });
		// // Swap elements in the DOM
		// oldEl.replaceWith(newEl);
		// widgetEl.value = newEl;
		// // Trigger Pretix to build/initialize widgets again
		// // @ts-expect-error PretixWidget is a global object provided by the script
		// window.PretixWidget?.buildWidgets();
	}

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
			// Declare callback to suppress auto-build
			{
				innerHTML: `window.pretixWidgetCallback = function() { window.PretixWidget.build_widgets = false; };`,
				type: 'text/javascript',
			},
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

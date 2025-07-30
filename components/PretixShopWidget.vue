<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
	<div
		:key="reloadKey"
		class="pretix-widget-container border-primary-500 mx-auto my-4 max-w-7xl border bg-white p-2 shadow-lg md:p-4"
	>
		<!-- The custom pretix-widget element -->
		<!-- Dynamically bind attributes using v-bind -->
		<pretix-widget ref="widgetEl" v-bind="widgetAttributes" disable-iframe />

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
	import { ref, computed, watch, onMounted, nextTick } from 'vue';
	import { useHead, useRuntimeConfig } from '#app';

	const props = defineProps({
		// Required: The slug of your pretix event (e.g., 'democon')
		eventSlug: { type: String, required: true },
		// Optional: Whether this is an event series with multiple subevents
		isEventSeries: { type: Boolean, default: false },
		// Optional: The ID of a specific subevent to pre-select
		subeventId: { type: Number, default: null },
		// one of 'list' | 'calendar' | 'week'
		seriesListType: { type: String, default: null },
		// Indicator to force reloading the widget
		reloadKey: { type: Number, default: 0 },
	});

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
	}>();

	// Optionally auto-refresh when props change
	watch(
		() => [props.eventSlug, props.seriesListType, props.reloadKey],
		() => {
			buildWidget();
		}
	);

	// On mount, build widgets manually
	onMounted(() => {
		buildWidget();
	});

	async function buildWidget() {
		// wait until the <pretix-widget> is in the DOM
		await nextTick();

		let attr: {
			[key: string]: string | boolean | number;
		} = {};

		// Scenario 1: Event without subevents
		if (!props.isEventSeries) {
			attr = {
				event: widgetEventUrl.value,
				'display-event-info': 'false',
			};
		} else {
			// Scenario 2: Event with selected subevent
			if (props.subeventId) {
				attr = {
					event: widgetEventUrl.value,
					subevent: JSON.stringify(props.subeventId),
					'display-event-info': 'true',
				};
			} else {
				// Scenario 3: Event with list of subevents
				const lt = props.seriesListType || 'calendar';
				attr = {
					event: widgetEventUrl.value,
					'list-type': lt,
				};
			}
		}
		// Update the widget attributes
		widgetAttributes.value = attr;
		// If the widget is already mounted, refresh it
		if (widgetEl.value) {
			// @ts-expect-error PretixWidget is a global object provided by the script
			window.PretixWidget?.buildWidgets();
		}
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

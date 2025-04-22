<template>
	<div>
		<PageHero
			:title="pageTitle"
			:breadcrumbs="[
				{ label: 'HOME', to: '/' },
				{ label: 'SPIELPLAN', to: '/stuecke' },
			]"
			:background-image="`url(${heroimage})`"
		/>
		<div class="mx-auto max-w-7xl p-4 sm:p-8 lg:max-w-7xl">
			<div v-if="loadingState === 'loading'">
				Veranstaltung wird geladen. Bitte warten.
			</div>
			<div v-else-if="loadingState === 'error'">
				Leider konnte die Veranstaltung nicht gefunden werden. Bitte versuche es
				später erneut.
				<UButton to="/stuecke" class="td-primary" block>
					Zurück zum Spielplan
				</UButton>
			</div>
			<div v-else-if="event">
				<!-- Infos -->
				<section class="my-8 flex flex-row gap-x-8">
					<div v-if="event.picture" class="basis-1/3">
						<img
							:src="switchBaseUrl(event.picture)"
							:alt="'Bild: ' + event.name.de"
							class="rounded-lg"
						/>
					</div>
					<div :class="{ 'basis-2/3': event.picture }">
						<h3>
							{{ event.subtitle ? event.subtitle.de : 'JETZT TICKETS KAUFEN' }}
						</h3>
						<p class="my-4">
							{{ event.desc ? event.desc.de : descMissing }}
						</p>
						<hr
							class="bg-primary mx-32 my-12 h-0.5 border-t-0 opacity-100 dark:opacity-50"
						/>
						<p class="my-8">
							EMPFOHLEN AB {{ event.recommendedAge || '4' }} JAHREN | Eintritt:
							16 € - 10 € ermässigt | Gruppen ab 12 Personen 1 Euro erm. pro
							Platz | Eine THEATERDECK Produktion in Kooperation mit der Theater
							Jugend Hamburg e.V. und dem Amt für Familie | Die Rechte liegen
							beim Verlag für Kindertheater Weitendorf GmbH
						</p>
					</div>
				</section>

				<!-- pretix widget -->
				<section class="bg-white">
					<div ref="pretixWidgetContainer" />
					<noscript>
						<div class="pretix-widget">
							<div class="pretix-widget-info-message">
								JavaScript is disabled in your browser. To access our ticket
								shop without JavaScript, please
								<a target="_blank" :href="eventURI">click here</a>
								.
							</div>
						</div>
					</noscript>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup>
	/**
	 * PAGE: /stuecke/[slug]
	 *
	 * This page shows a single event and the ticket shop. If the event is not found in the store, it will try to fetch the event from the API.
	 */
	import { ref, onMounted, onUnmounted, computed } from 'vue';
	import { useEventsStore } from '~/stores/events';
	import { useAPIBaseUrl } from '~/composables/useAPIBaseUrl';
	// import { useFormatDate } from '~/composables/useFormatDate'

	import heroimage from '../assets/images/hero-highkey-chairs.jpg';

	// const { formatDate } = useFormatDate()
	const { switchBaseUrl } = useAPIBaseUrl();
	const route = useRoute();
	const slug = computed(() => route.params.slug);
	const config = useRuntimeConfig();
	const eventURI = computed(
		() => `${config.public.pretixBaseUrl}/td/${slug.value}/`
	);
	const pretixWidgetCSSURI = computed(() => `${eventURI.value}widget/v1.css`);

	const eventsStore = useEventsStore();
	const event = ref(null);
	const loadingState = ref('loading');
	const pretixWidgetContainer = ref(null);

	const pageTitle = computed(() => {
		if (loadingState.value === 'loading') return 'Loading Event...';
		if (loadingState.value === 'error') return 'Event Not Found';
		return event.value ? event.value.name.de : 'Veranstaltungsinformationen';
	});

	// Load the event data from the store or fetch from the API
	async function loadEvent() {
		loadingState.value = 'loading';
		// Check if the event is already in the store
		let foundEvent = eventsStore.getEventBySlug(slug.value);
		if (!foundEvent) {
			// If not found, fetch events from the API
			const fetchSuccess = await eventsStore.fetchEvents();
			if (fetchSuccess) {
				foundEvent = eventsStore.getEventBySlug(slug.value);
			}
		}
		if (foundEvent) {
			event.value = foundEvent;
			loadingState.value = 'loaded';
			// Load pretix widget after event data is loaded
			loadPretixWidget();
		} else {
			loadingState.value = 'error';
		}
	}

	// Load the pretix widget script and initialize the widget
	function loadPretixWidget() {
		const script = document.createElement('script');
		script.src = `${config.public.pretixBaseUrl}/widget/v1.de.js`;
		script.async = true;
		script.onload = initPretixWidget;
		document.head.appendChild(script);
	}

	// Initialize the pretix widget
	function initPretixWidget() {
		if (pretixWidgetContainer.value && window.PretixWidget) {
			const widget = document.createElement('pretix-widget');
			widget.setAttribute('event', eventURI.value);
			pretixWidgetContainer.value.appendChild(widget);
			window.PretixWidget.buildWidgets();
		}
	}

	onMounted(() => {
		loadEvent();
	});

	// Cleanup the pretix widget when the component is unmounted -> Bugfix for Alert Symbol below footer
	onUnmounted(() => {
		const pretixOverlay = document.querySelector(
			'div.pretix-widget-alert-holder'
		);
		if (pretixOverlay) {
			pretixOverlay.remove();
		}
	});

	// Some helper Texts
	const descMissing =
		'Hier sollte eigentlich die Beschreibung des Events sein, aber es ist leider ein Fehler aufgetreten.';

	useHead({
		link: [
			{ rel: 'preconnect', href: config.public.pretixBaseUrl },
			{ rel: 'stylesheet', href: pretixWidgetCSSURI, crossorigin: 'anonymous' },
		],
	});
</script>

<style scoped></style>

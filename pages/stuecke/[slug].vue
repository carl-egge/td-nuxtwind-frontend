<!-- eslint-disable vue/no-v-html -->
<template>
	<div>
		<!-- Page Hero -->
		<PageHero v-if="event" :title="pageTitle" :background-image="bgImage" />
		<!--  Hero: show while loading event -->
		<div
			v-else
			class="bg-primary-200 flex h-[65vh] items-end justify-center pt-20"
		>
			<div class="px-8 pb-16 text-center uppercase">
				<h1 class="hyphens-auto leading-tight" lang="de">Lädt...</h1>
			</div>
		</div>

		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<div v-if="loadingState === 'loading'" class="text-center text-lg">
				<i>Veranstaltung wird geladen. Bitte warten.</i>
			</div>
			<div v-else-if="loadingState === 'error'">
				<h3>
					Leider konnte die Veranstaltung nicht gefunden werden. Bitte versuche
					es später erneut.
				</h3>
				<UButton to="/stuecke" class="td-primary" block>
					Zurück zum Spielplan
				</UButton>
			</div>
			<div v-else-if="event">
				<!-- Infos -->
				<section class="bg-background text-text md:py-12">
					<div class="flex flex-col items-start gap-6">
						<!-- Logo -->
						<!-- Can be used to switch from localhost to public: :src="switchBaseUrl(event.picture)"-->
						<!-- <div class="w-full flex-shrink-0 md:w-1/3">
							<NuxtImg
								:src="event.logo_image"
								:alt="event.name.de"
								class="border-primary-500 h-auto w-full rounded-none border bg-background object-cover shadow-lg"
							/>
						</div> -->

						<!-- Textual Info -->
						<div class="flex-1 space-y-6">
							<!-- Title -->
							<p class="text-primary-500 text-base font-semibold leading-7">
								{{ event.meta_data.autor }}
							</p>
							<h3>
								{{ event.name.de }}
							</h3>

							<!-- Quote -->
							<blockquote class="border-l-4 border-theme-accent pl-4 italic">
								<p class="text-primary-400 text-3xl">
									“{{ event.meta_data.zitat }}”
								</p>
							</blockquote>

							<!-- Frontpage Text (Markdown) -->
							<div
								class="prose prose-lg max-w-none"
								v-html="renderedFrontpage ? renderedFrontpage : descMissing"
							/>

							<!-- Event Info Text (Markdown) -->
							<div
								class="prose prose-sm max-w-none uppercase"
								v-html="renderedInfo"
							/>

							<!-- Pricing -->
							<div
								class="mt-4 flex flex-col space-y-2 text-3xl text-theme-accent sm:flex-row sm:space-x-8 sm:space-y-0"
							>
								<div class="font-semibold">
									16 €
									<span class="text-base font-normal text-text">
										Normalpreis
									</span>
								</div>
								<div class="font-semibold">
									10 €
									<span class="text-base font-normal text-text">Ermäßigt</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<PretixShopWidget
					v-if="event && subeventId"
					:event-slug="event.slug"
					:subevent-id="subeventId"
				/>
				<PretixShopWidget v-else-if="event" :event-slug="event.slug" />
				<div v-else>
					<UButton :to="publicURI" target="_blank">Ticketshop öffnen</UButton>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
	/**
	 * PAGE: /stuecke/[slug]
	 *
	 * This page shows a single event and the ticket shop. If the event is not found in the store, it will try to fetch the event from the API.
	 */
	import { ref, onMounted, computed } from 'vue';
	import { useEventsStore } from '~/stores/events';
	import MarkdownIt from 'markdown-it';
	import heroimage from '../assets/images/hero-highkey-chairs.jpg';

	const bgImage = computed(() => {
		// event.value might be null on first render
		return event?.value.logo_image
			? `url(${event.value.logo_image})`
			: `url(${heroimage})`;
	});

	// Get route information
	const route = useRoute();
	const slug = computed(() => route.params.slug);
	const subeventId = computed(() => {
		const subeventIdParam = route.query.subeventid;
		return subeventIdParam ? JSON.parse(subeventIdParam) : null;
	});

	const config = useRuntimeConfig();
	const publicURI = computed(
		() => `${config.public.pretixBaseUrl}/td/${slug.value}/`
	);
	const eventsStore = useEventsStore();
	const event = ref(null);
	const loadingState = ref('loading');

	const pageTitle = computed(() => {
		if (loadingState.value === 'loading') return 'Loading Event...';
		if (loadingState.value === 'error') return 'Event Not Found';
		return event.value ? event.value.name.de : 'Veranstaltungsinformationen';
	});

	// Rendered API Markdown content for frontpage and event info
	const md = new MarkdownIt({
		html: true,
		linkify: true,
		typographer: true,
	});
	const renderedFrontpage = computed(() =>
		md.render(event.value.frontpage_text.de)
	);
	const renderedInfo = computed(() =>
		md.render(event.value.event_info_text.de)
	);

	// Load the event data from the store or fetch from the API
	async function loadEvent() {
		loadingState.value = 'loading';
		// Check if the event is already in the store
		let foundEvent = eventsStore.getEventBySlug(slug.value);
		if (!foundEvent) {
			// If not found, fetch events from the API or Mock Data
			let fetchSuccess = false;
			if (config.public.useMockData) {
				fetchSuccess = await eventsStore.fetchTestEvents();
			} else {
				fetchSuccess = await eventsStore.fetchEvents();
			}
			if (fetchSuccess) {
				foundEvent = eventsStore.getEventBySlug(slug.value);
			}
		}
		if (foundEvent) {
			event.value = foundEvent;
			loadingState.value = 'loaded';
		} else {
			loadingState.value = 'error';
		}
	}

	onMounted(() => {
		loadEvent();
	});

	// Some helper Texts
	const descMissing =
		'Hier sollte eigentlich die Beschreibung des Events sein, aber es ist leider ein Fehler aufgetreten.';
</script>

<style scoped></style>

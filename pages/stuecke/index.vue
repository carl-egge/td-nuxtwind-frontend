<template>
	<div>
		<PageHero
			title="SpielPLAN"
			:breadcrumbs="[{ label: 'HOME', to: '/' }]"
			:background-image="`url(${heroimage})`"
		/>
		<main>
			<!-- TODO: Change this to eventsStore.getAllLiveandUpcomingEvents -->
			<h3 class="sr-only">Unsere Veranstaltungen</h3>
			<div v-if="eventsStore.isLoading">
				<UProgress animation="carousel" />
				<p>Veranstaltungen werden geladen. Bitte warten.</p>
			</div>
			<div
				v-if="
					!eventsStore.isLoading &&
					!eventsStore.error &&
					eventsStore.getEventCount > 0
				"
			>
				<div v-for="event in eventsStore.getAllEvents" :key="String(event.id)">
					<EventCard :event="event" />
				</div>
			</div>
			<div v-else>
				<h4>Bitte entschuldige. Wir konnten keine Veranstaltungen finden.</h4>
				<!-- <UButton class="td-primary my-6">
                    <a href="/stuecke"> Erneut Versuchen </a>
                </UButton> -->
			</div>
			<div v-if="eventsStore.error" class="my-2 w-full rounded bg-red-500 p-2">
				<p class="text-background">
					Fehler beim Veranstaltungen laden: "{{ eventsStore.error }}"
				</p>
			</div>
			<UButton :disabled="eventsStore.isLoading" block @click="refreshEvents">
				Erneut Versuchen
			</UButton>
		</main>
		<TheNewsletter />
	</div>
</template>

<script setup lang="ts">
	/**
	 * PAGE: stuecke/index.vue
	 *
	 * Landing Page for the Shows: Spielplan.
	 */

	import heroimage from '../assets/images/hero-highkey-windschief.jpg';

	import { onMounted } from 'vue';
	import { useEventsStore } from '~/stores/events';

	const eventsStore = useEventsStore();
	const config = useRuntimeConfig();

	onMounted(() => {
		fetchData();
	});

	const refreshEvents = () => {
		fetchData();
	};

	function fetchData() {
		if (config.public.useMockData) {
			return eventsStore.fetchTestEvents();
		} else {
			return eventsStore.fetchEvents();
		}
	}
</script>

<style scoped></style>

<template>
	<div>
		<PageHero title="SpielPLAN" :background-image="`url(${heroimage})`" />

		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<p class="text-primary-500 text-base font-semibold leading-7">
				Wo Geschichten auf die Bühne kommen
			</p>
			<div class="flex items-center justify-between">
				<h3 aria-label="Unsere Veranstaltungen">Unsere Veranstaltungen.</h3>
				<UButton
					icon="i-heroicons-arrow-path"
					size="xs"
					variant="ghost"
					aria-label="Aktualisieren"
					:loading="pending"
					@click="refresh"
				/>
			</div>
			<p>
				Willkommen im Spielplan des Theaterdeck Hamburg! Hier findest du alle
				aktuellen Stücke und kommenden Termine – sichere dir jetzt deine Tickets
				und komm vorbei.
			</p>
			<MyTabs
				:items="[
					{ label: 'Spielplan', slot: 'spielplan' },
					{ label: 'Stücke', slot: 'stuecke' },
				]"
			>
				<!-- Spielplan content -->
				<template #spielplan>
					<!-- Month Filter -->
					<div class="my-6 flex flex-wrap gap-2">
						<UButton
							v-for="month in months"
							:key="month.key"
							size="sm"
							color="gray"
							variant="ghost"
							class="text-base"
							:class="{ underline: month.key === selectedMonth }"
							@click="
								selectedMonth = month.key;
								page = 1;
							"
						>
							{{ month.label }}
						</UButton>
					</div>

					<!-- Event List -->
					<div v-if="filtered.length" class="bg-background text-text">
						<div
							v-for="(item, idx) in paginated"
							:key="idx"
							:class="[
								'flex transform cursor-pointer items-center justify-between px-4 py-4 transition hover:scale-[1.015] active:scale-[0.985]',
								idx === paginated.length - 1
									? 'border-b-0'
									: 'border-primary-600 border-b',
							]"
							@click="goToEvent(item.event_slug, item.subeventId)"
						>
							<div class="w-24 text-center leading-snug text-text">
								<div class="text-md font-bold">
									{{ weekday(item.date_from) }}
								</div>
								<div class="text-2xl font-extrabold">
									{{ justDate(item.date_from) }}
								</div>
							</div>
							<div class="flex-1 text-text">
								<div class="font-semibold">{{ item.name }}</div>
								<div class="mt-1 flex items-center gap-2 text-text/70">
									<UBadge
										v-if="item.tag"
										size="xs"
										variant="subtle"
										color="yellow"
									>
										{{ item.tag }}
									</UBadge>
									<UBadge size="xs" variant="subtle" color="primary">
										{{ time(item.date_from) }}
									</UBadge>
									<span>{{ item.autor }}</span>
								</div>
							</div>
							<div class="text-primary-600 flex">
								<UIcon name="i-heroicons-chevron-right" class="h-7 w-7" />
							</div>
						</div>

						<!-- Pagination Dots (Swipeable) -->
						<div
							v-if="totalPages > 1"
							class="mb-4 mt-2 flex touch-pan-x justify-center overflow-auto px-2"
						>
							<div class="flex min-w-max gap-2">
								<button
									v-for="n in totalPages"
									:key="n"
									class="h-3 w-3 shrink-0 rounded-full"
									:class="
										n === page ? 'bg-primary-600' : 'bg-theme-secondary/40'
									"
									@click="page = n"
								/>
							</div>
						</div>
					</div>

					<!-- Error / No Data -->
					<div v-else class="mt-6 text-center text-sm text-theme-secondary">
						<template v-if="error">
							<p class="font-medium text-red-500">
								Fehler beim Laden der Veranstaltungen.
							</p>
							<p>Bitte versuchen Sie es später erneut.</p>
						</template>
						<template v-else-if="!pending">
							<p>Keine anstehenden Veranstaltungen gefunden.</p>
						</template>
					</div>
				</template>
				<!-- Stücke content -->
				<template #stuecke>
					<div v-if="liveEvents.length" class="bg-background text-text">
						<div
							v-for="(event, idx) in liveEvents"
							:key="idx"
							:class="[
								'flex transform cursor-pointer flex-col items-center justify-between px-4 py-4 transition hover:scale-[1.015] active:scale-[0.985] md:flex-row',
								idx === liveEvents.length - 1
									? 'border-b-0'
									: 'border-primary-600 border-b',
							]"
							@click="goToEvent(event.slug)"
						>
							<div
								v-if="event.og_image"
								class="mb-5 h-44 w-[80vw] shrink-0 md:mb-0 md:w-44"
							>
								<img
									:src="event.og_image"
									:alt="event.name.de"
									class="border-primary-600 h-full w-full rounded-none border object-cover"
								/>
							</div>
							<div class="w-[80vw] flex-1 md:w-auto md:px-4">
								<div class="text-xl font-semibold">{{ event.name.de }}</div>
								<p class="mt-1 text-text/70">
									{{ truncateText(event.frontpage_text.de, 50) }}
								</p>
							</div>
							<div class="flex w-full justify-end md:hidden">
								<UButton
									icon="i-heroicons-chevron-right"
									trailing
									size="sm"
									color="primary"
									variant="solid"
									@click="goToEvent(event.slug)"
								>
									Tickets
								</UButton>
							</div>
							<div class="text-primary-600 flex hidden md:block">
								<UIcon name="i-heroicons-chevron-right" class="h-7 w-7" />
							</div>
						</div>
					</div>
					<div v-else class="mt-6 text-center text-sm text-theme-secondary">
						<p>Keine aktuellen Stücke gefunden.</p>
					</div>
				</template>
			</MyTabs>
		</main>
		<TheNewsletter />
	</div>
</template>

<script setup lang="ts">
	/**
	 * PAGE: stuecke/index.vue
	 *
	 * This is the page for all events and upcoming dates.
	 */
	import heroimage from '../assets/images/spielplan02.webp';
	import { useFormatDate } from '~/composables/useFormatDate';
	import { ref, onMounted, watchEffect } from 'vue';

	const eventsStore = useEventsStore();
	const config = useRuntimeConfig();

	const { weekday, justDate } = useFormatDate();
	const time = (dateStr: string) =>
		new Date(dateStr).toLocaleTimeString('de-DE', {
			hour: '2-digit',
			minute: '2-digit',
		});

	const { data, error, pending, refresh } = await useFetch(
		'/api/upcomingEventDates',
		{
			onResponseError({ response }) {
				console.error('Fehler beim Abrufen der Veranstaltungen:', response);
			},
		}
	);

	// Utility function to truncate text to a specific number of words
	const truncateText = (text: string, wordLimit: number): string => {
		return (
			text.split(' ').slice(0, wordLimit).join(' ') +
			(text.split(' ').length > wordLimit ? '...' : '')
		);
	};

	const goToEvent = (slug: string, subeventid?: number) => {
		// You can't pass props directly via navigateTo in Nuxt.
		// Instead, pass data via query params or use a store.
		// Example with query param:
		const url = subeventid
			? `/stuecke/${slug}?subeventid=${encodeURIComponent(JSON.stringify(subeventid))}`
			: `/stuecke/${slug}`;
		navigateTo(url);
	};

	const pageSize = 6;
	const page = ref(1);
	const selectedMonth = ref('all');

	const months = computed(() => {
		const result = [{ key: 'all', label: 'Alle Monate' }];
		const now = new Date();
		const currentMonth = now.getMonth();
		const currentYear = now.getFullYear();
		for (let i = 0; i < 3; i++) {
			const d = new Date(currentYear, currentMonth + i, 1);
			const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
			const label = d.toLocaleString('de-DE', {
				month: 'long',
				year: 'numeric',
			});
			result.push({ key, label });
		}
		return result;
	});

	const filtered = computed(() => {
		const now = new Date();
		const upcoming = (data.value ?? []).filter(
			(item) => new Date(item.date_from) > now
		);
		if (selectedMonth.value === 'all') return upcoming;
		return upcoming.filter((item) => {
			const date = new Date(item.date_from);
			const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
			return key === selectedMonth.value;
		});
	});

	const totalPages = computed(() =>
		Math.ceil(filtered.value.length / pageSize)
	);
	const paginated = computed(() =>
		filtered.value.slice((page.value - 1) * pageSize, page.value * pageSize)
	);

	const liveEvents = ref<APIEvent[]>([]);

	onMounted(async () => {
		// Fetch events
		if (config.public.useMockData) {
			await eventsStore.fetchTestEvents();
		} else {
			await eventsStore.fetchEvents();
		}

		// Update liveEvents after fetching
		watchEffect(() => {
			// TODO: Should only fetch LiveUpcomingEvents
			liveEvents.value = eventsStore.getLiveUpcomingEvents;
		});
	});
</script>

<style scoped></style>

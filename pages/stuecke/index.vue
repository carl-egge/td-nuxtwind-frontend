<template>
	<div>
		<PageHero
			title="SpielPLAN"
			:breadcrumbs="[{ label: 'HOME', to: '/' }]"
			:background-image="`url(${heroimage})`"
		/>
		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mb-4 flex items-center justify-between">
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

			<!-- Month Filter -->
			<div class="mb-4 flex flex-wrap gap-2">
				<UButton
					v-for="month in months"
					:key="month.key"
					size="sm"
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
					:key="
						item.type + '-' + item.event_slug + '-' + (item.subevent_id || '')
					"
					:class="[
						'flex transform cursor-pointer items-start justify-between px-4 py-4 transition hover:scale-[1.015] active:scale-[0.985]',
						idx === paginated.length - 1
							? 'border-b-0'
							: 'border-primary-600 border-b',
					]"
					@click="goToEvent(item.event_slug)"
				>
					<div class="w-24 text-center leading-snug text-text">
						<div class="text-md font-bold">{{ weekday(item.date_from) }}</div>
						<div class="text-2xl font-extrabold">
							{{ justDate(item.date_from) }}
						</div>
					</div>
					<div class="flex-1 text-text">
						<div class="font-semibold">{{ item.name }}</div>
						<div class="mt-1 flex items-center gap-2 text-text/70">
							<UBadge size="xs" variant="subtle" color="primary">
								{{ time(item.date_from) }}
							</UBadge>
							<span>{{ item.subtitle }}</span>
						</div>
					</div>
					<div class="text-primary-600 pt-2">
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
							:class="n === page ? 'bg-primary-600' : 'bg-theme-secondary/40'"
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
		</main>
		<TheNewsletter />
	</div>
</template>

<script setup lang="ts">
	import heroimage from '../assets/images/spielplan02.webp';
	import { useFormatDate } from '~/composables/useFormatDate';

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

	const goToEvent = (slug) => {
		console.log('Navigating to event:', slug);
		navigateTo('/stuecke/' + slug);
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
</script>

<style scoped></style>

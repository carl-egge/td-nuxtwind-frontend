<template>
	<div>
		<PageHero
			title="SpielPLAN"
			:breadcrumbs="[{ label: 'HOME', to: '/' }]"
			:background-image="`url(${heroimage})`"
		/>
		<main>
			<h3 aria-label="Unsere Veranstaltungen">Unsere Veranstaltungen</h3>
			<div>
				<div class="mb-2 flex justify-end">
					<UButton
						icon="i-heroicons-arrow-path"
						size="xs"
						:loading="pending"
						@click="refresh"
					/>
				</div>

				<div
					v-if="data?.length"
					class="divide-y divide-neutral-300 rounded-xl border border-neutral-200 bg-neutral-50"
				>
					<div
						v-for="item in data"
						:key="
							item.type + '-' + item.event_slug + '-' + (item.subevent_id || '')
						"
						class="flex items-start justify-between gap-4 px-4 py-3 transition hover:bg-neutral-100"
						@click="goToEvent(item.event_slug)"
					>
						<!-- Date -->
						<div class="w-20 shrink-0 text-center leading-snug">
							<div class="text-sm font-medium text-neutral-600">
								{{ weekday(item.date_from) }}
							</div>
							<div class="text-xl font-semibold text-neutral-800">
								{{ justDate(item.date_from) }}
							</div>
						</div>

						<!-- Title & Subtitle -->
						<div class="flex-1">
							<div class="text-lg font-bold text-neutral-900">
								{{ item.name }}
							</div>
							<div class="mt-1 text-sm text-neutral-600">
								{{ item.subtitle }}
							</div>
						</div>

						<!-- Arrow Icon -->
						<div class="shrink-0 pt-2 text-pink-600">
							<UIcon name="i-heroicons-chevron-right" class="h-5 w-5" />
						</div>
					</div>
				</div>

				<!-- Error or No Data Message -->
				<div v-else class="mt-6 text-center text-sm text-neutral-500">
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
			</div>
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
	import { useFormatDate } from '~/composables/useFormatDate';

	const { data, error, pending, refresh } = await useFetch(
		'/api/upcomingEventDates',
		{
			onResponseError({ response }) {
				console.error('Fehler beim Abrufen der Veranstaltungen:', response);
			},
		}
	);
	const { weekday, justDate } = useFormatDate();

	const goToEvent = (slug) => navigateTo('/stuecke/' + slug);
</script>

<style scoped></style>

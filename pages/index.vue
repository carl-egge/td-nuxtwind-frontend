<template>
	<div>
		<!-- Logo: fixed top-left -->
		<NuxtLink
			to="/"
			class="fixed left-5 top-5 z-50 h-[clamp(3.5rem,5vw,4.5rem)] w-[clamp(3.5rem,5vw,4.5rem)] transition-transform duration-300 hover:scale-110"
		>
			<TheLogo color="#f51663" />
		</NuxtLink>

		<!-- Burger Menu Button: fixed top-right -->
		<div class="text-primary-600 fixed right-4 top-4 z-50">
			<SlideOverMenu />
		</div>

		<!-- Scroll Sections Container -->
		<div
			ref="container"
			class="scroll-container h-screen overflow-y-auto overflow-x-hidden"
		>
			<ScrollSection
				v-for="(section, idx) in sectionData"
				:key="idx"
				v-bind="section"
				:cta-text="ctaText"
			/>

			<!-- Navigation dots -->
			<div
				class="fixed right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4"
			>
				<button
					v-for="(_, i) in sectionData"
					:key="i"
					:title="`Go to section ${i + 1}`"
					:aria-controls="`section-${i + 1}`"
					:aria-current="activeIndex === i ? 'true' : 'false'"
					:class="[
						'round-dots h-3 w-3 transition-all duration-300',
						activeIndex === i
							? 'scale-150 bg-white'
							: 'bg-white/20 hover:scale-150 hover:bg-white',
					]"
					@click="scrollToSection(i)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	/**
	 * PAGE: index.vue
	 *
	 * This is the landing page of the website.
	 */
	import { ref, onMounted, onBeforeUnmount } from 'vue';
	import { useEventsStore } from '~/stores/events';

	definePageMeta({ layout: false });

	const eventsStore = useEventsStore();
	const config = useRuntimeConfig();

	const container = ref<HTMLElement | null>(null);
	const activeIndex = ref(0);

	const ctaText = 'Spielplan & Tickets';

	const sectionData = ref<ScrollSectionItem[]>([
		{
			index: 1,
			label: 'Willkommen an Deck',
			title: 'Theaterdeck Hamburg',
			slug: '',
			quote:
				'Wir spielen mit Liebe zum Detail und dem Ton, der ins Herz trifft.',
			image: '/images/sw-welcome-sams.jpg',
			alt: 'Theaterdeck Hamburg',
			gradientClass: 'bg-gradient-to-r from-neutral-950/50 to-neutral-950/20',
			reverse: false,
		},
	]);

	// Helper to map APIEvent to SectionItem
	function mapEventToSectionItem(
		event: APIEvent,
		idx: number
	): ScrollSectionItem {
		return {
			index: idx + 2,
			label: event.meta_data?.autor || 'Willkommen an Deck',
			title: event.name?.de || event.name?.en || 'Theaterdeck Hamburg',
			slug: event.slug || '',
			quote: event.meta_data?.zitat || '',
			image:
				event.og_image ||
				event.logo_image ||
				'/images/sw-welcome-novecento.webp',
			alt: event.name?.de || 'Theaterdeck Hamburg Veranstaltung',
			gradientClass: 'bg-gradient-to-r from-neutral-950/50 to-neutral-950/20',
			reverse: sectionData.value.length % 2 === 1,
		};
	}

	// scroll to section by index
	const scrollToSection = (index: number) => {
		if (container.value) {
			container.value
				.querySelectorAll('.scroll-section')
				// eslint-disable-next-line no-unexpected-multiline
				[index].scrollIntoView({ behavior: 'smooth' });
			activeIndex.value = index;
		}
	};

	// update active index based on scroll position
	const updateSlideIndex = () => {
		activeIndex.value = Math.round(
			container.value!.scrollTop / window.innerHeight
		);
	};

	onMounted(async () => {
		// add scroll event listener
		if (container.value) {
			container.value.addEventListener('scroll', updateSlideIndex);
		}
		// fetch events
		if (config.public.useMockData) {
			await eventsStore.fetchTestEvents();
		} else {
			await eventsStore.fetchEvents();
		}
		// Append live/upcoming events to sectionData (sorted by date_from)
		const rawLiveEvents = eventsStore.getLiveUpcomingEvents || [];

		const parseTimeOrInf = (dateStr?: string) => {
			if (!dateStr) return Number.POSITIVE_INFINITY;
			const t = Date.parse(dateStr);
			return Number.isNaN(t) ? Number.POSITIVE_INFINITY : t;
		};

		const liveEvents = [...rawLiveEvents].sort((a: APIEvent, b: APIEvent) => {
			return parseTimeOrInf(a.date_from) - parseTimeOrInf(b.date_from);
		});

		liveEvents.forEach((event: APIEvent, idx: number) => {
			sectionData.value.push(mapEventToSectionItem(event, idx));
		});
	});

	onBeforeUnmount(() => window.removeEventListener('scroll', updateSlideIndex));
</script>

<style>
	.scroll-container {
		scroll-snap-type: y mandatory;
		-webkit-overflow-scrolling: touch;
	}
	.scroll-section {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
	.content-mask {
		-webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
		mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
	}
	.round-dots {
		@apply rounded-full !important;
	}
</style>

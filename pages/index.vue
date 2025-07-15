<template>
	<div>
		<!-- Logo: fixed top-left -->
		<NuxtLink
			to="/"
			class="fixed left-5 top-5 z-50 h-12 w-12 transition-transform duration-300 hover:scale-110"
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
			image: '/images/welcome.webp',
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
			image: event.logo_image || '/images/welcome.webp',
			alt: event.name?.de || 'Theaterdeck Hamburg Veranstaltung',
			gradientClass: 'bg-gradient-to-r from-neutral-950/50 to-neutral-950/20',
			reverse: (sectionData.value.length + idx) % 2 === 1,
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
		// Append live/upcoming events to sectionData
		const liveEvents = eventsStore.getLiveUpcomingEvents;
		liveEvents.forEach((event: APIEvent, idx: number) => {
			sectionData.value.push(mapEventToSectionItem(event, idx));
		});
	});

	onBeforeUnmount(() => window.removeEventListener('scroll', updateSlideIndex));
</script>

<style>
	/* Global animations and scroll styles unchanged */
	@keyframes reveal {
		from {
			clip-path: inset(0 100% 0 0);
		}
		to {
			clip-path: inset(0 0 0 0);
		}
	}
	@keyframes textReveal {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
	@keyframes shine {
		from {
			transform: translateX(-100%) rotate(45deg);
		}
		to {
			transform: translateX(200%) rotate(45deg);
		}
	}
	.shine-effect::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.2),
			transparent
		);
		transform: translateX(-100%) rotate(45deg);
	}
	.shine-effect:hover::before {
		animation: shine 1.5s;
	}
	.float-animation {
		animation: float 6s ease-in-out infinite;
	}
	.split-reveal {
		animation: reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1);
	}
	.text-reveal {
		animation: textReveal 0.8s cubic-bezier(0.77, 0, 0.175, 1);
	}
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

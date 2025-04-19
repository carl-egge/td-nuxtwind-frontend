<template>
	<div>
		<!-- Logo: fixed top-left -->
		<!-- <div class="fixed left-4 top-4 z-50"> -->
		<NuxtLink
			to="/"
			class="fixed left-5 top-5 z-50 h-12 w-12 transition-transform duration-300 hover:scale-110"
		>
			<TheLogo color="#e27830" />
		</NuxtLink>
		<!-- </div> -->

		<!-- Burger Menu Button: fixed top-right -->
		<div class="fixed right-4 top-4 z-50 text-white">
			<UButton
				icon="i-heroicons-bars-3-16-solid"
				color="black"
				size="xl"
				variant="ghost"
				class="scale-125"
				@click="isOpen = true"
			/>
		</div>

		<!-- SlideOver Menu -->
		<USlideover
			v-model="isOpen"
			:side="slideSide"
			:ui="{
				strategy: 'override',
				overlay: { background: 'bg-background/40' },
				height: slideHeight,
				width: slideWidth,
			}"
		>
			<div class="h-full overflow-y-auto bg-background text-center text-text">
				<!-- Close Button -->
				<UButton
					icon="i-heroicons-x-mark"
					color="gray"
					variant="ghost"
					size="xl"
					class="absolute right-6 top-6 scale-150 hover:bg-transparent"
					@click="isOpen = false"
				/>
				<div class="align-text-middle h-full p-4 pt-24">
					<NuxtLink to="/">
						<div class="mx-auto h-12 w-12">
							<TheLogo color="#e27830" />
						</div>
						<h2 class="text-primary mb-8 mt-2 text-xl font-semibold uppercase">
							{{ title }}
						</h2>
					</NuxtLink>
					<nav class="flex flex-col text-lg">
						<NuxtLink
							v-for="link in burger_links"
							:key="link.to"
							:to="link.to"
							class="hover:text-theme-secondary-500"
							@click="isOpen = false"
						>
							{{ link.text }}
							<hr class="mx-auto my-4 w-6" />
						</NuxtLink>
					</nav>
				</div>
			</div>
		</USlideover>

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
						'h-3 w-3 rounded-full transition-all duration-300',
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
	import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
	import { useEventsStore } from '~/stores/events';

	definePageMeta({ layout: false });

	const eventsStore = useEventsStore();
	const config = useRuntimeConfig();

	const isOpen = ref(false);
	const screenWidth = ref(0); // viewport width
	const container = ref<HTMLElement | null>(null);
	const activeIndex = ref(0);

	const ctaText = 'Tickets';
	const title = 'Theaterdeck';

	interface SectionItem {
		index: number;
		label: string;
		title: string;
		quote: string;
		image: string;
		alt: string;
		gradientClass: string;
		reverse?: boolean;
	}
	const sectionData: SectionItem[] = [
		{
			index: 1,
			label: 'Willkommen an Deck',
			title: 'Theaterdeck Hamburg',
			quote:
				'"Wir spielen mit Liebe zum Detail und dem Ton, der ins Herz trifft."',
			image: '/images/hero/hero-letters-shadow.jpg',
			alt: 'Theaterdeck Hamburg',
			gradientClass: 'bg-gradient-to-r from-neutral-950/70 to-neutral-950/50',
			reverse: false,
		},
		{
			index: 2,
			label: 'Otfried Preußler',
			title: 'Räuber Hotzenplotz',
			quote: '"Einem Räuber wird heutzutage auch nix mehr geschenkt."',
			image: '/images/hero/hero-hotzenplotz.jpeg',
			alt: 'Räuber Hotzenplotz von Ottfried Preußler',
			gradientClass: 'bg-gradient-to-l from-primary/50 to-primary/30',
			reverse: true,
		},
		{
			index: 3,
			label: 'KIRSTEN BOIE',
			title: 'Dunkelnacht',
			quote:
				'"Weil auch in diesen Zeiten irgendwer das Richtige tun muss, einfach, weil es richtig ist."',
			image: '/images/hero/hero-dunkelnacht.jpeg',
			alt: 'Dunkelnacht von Kirsten Boie',
			gradientClass: 'bg-gradient-to-r from-cyan-600/50 to-cyan-600/30',
			reverse: false,
		},
	];

	const burger_links = [
		{ to: '/stuecke', text: 'Spielplan' },
		{ to: '/schule', text: 'Theater Jugend' },
		{ to: '/vermietung', text: 'Raummiete' },
		{ to: '/kontakt', text: 'Kontakt' },
		{ to: '/datenschutz', text: 'Datenschutz' },
		{ to: '/impressum', text: 'Impressum' },
	];

	// true when ≥lg (1024px)
	const isLarge = computed(() => screenWidth.value >= 1024);

	// derive the responsive info for the slideover menu
	const slideSide = computed(() => (isLarge.value ? 'right' : 'top'));
	const slideHeight = computed(() => (isLarge.value ? 'auto' : 'h-screen'));
	const slideWidth = computed(() =>
		isLarge.value ? 'w-screen max-w-sm' : 'w-full'
	);

	const scrollToSection = (index: number) => {
		if (container.value) {
			container.value
				.querySelectorAll('.scroll-section')
				// eslint-disable-next-line no-unexpected-multiline
				[index].scrollIntoView({ behavior: 'smooth' });
			activeIndex.value = index;
		}
	};

	// update viewport width on resize
	const updateWidth = () => {
		screenWidth.value = window.innerWidth;
	};

	onMounted(() => {
		// set initially
		updateWidth();
		// then keep in sync
		window.addEventListener('resize', updateWidth);
		// add scroll event listener
		if (container.value) {
			container.value.addEventListener('scroll', () => {
				activeIndex.value = Math.round(
					container.value!.scrollTop / window.innerHeight
				);
			});
		}
		// fetch events
		if (config.public.useMockData) {
			return eventsStore.fetchTestEvents();
		} else {
			return eventsStore.fetchEvents();
		}
	});

	onBeforeUnmount(() => window.removeEventListener('resize', updateWidth));
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
</style>

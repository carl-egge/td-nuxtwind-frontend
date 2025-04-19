<template>
	<div class="flex h-screen flex-col">
		<!-- Header -->
		<TheHeader class="mb-2 shadow-none" />

		<!-- Main content area -->
		<main
			class="relative mb-0 mt-[80px] flex h-full flex-grow flex-col overflow-hidden px-2 md:px-4 md:pb-4 md:pt-4"
		>
			<!-- DESKTOP SCREENS -->
			<div class="relative hidden flex-grow overflow-hidden md:block">
				<UCarousel
					ref="carouselRef"
					v-slot="{ item }"
					:items="items"
					:ui="{
						item: 'basis-full',
						container: 'h-full',
						wrapper: 'h-full',
					}"
					:prev-button="{
						color: 'gray',
						icon: 'i-heroicons-arrow-left-16-solid',
						class: '-left-2 ring-0 shadow-none bg-transparent',
					}"
					:next-button="{
						color: 'gray',
						icon: 'i-heroicons-arrow-right-16-solid',
						class: '-right-1 ring-0 shadow-none bg-transparent text-xl',
					}"
					arrows
					class="mx-auto w-[98%]"
				>
					<div class="relative h-full w-full">
						<!-- Slider Design for large Screens -->
						<div class="hidden h-full px-10 md:flex">
							<div class="z-10 -mr-4 h-5/6 w-1/3 py-4">
								<div class="flex h-full w-full flex-col">
									<div class="flex flex-grow flex-col overflow-hidden p-4">
										<div class="title-container flex flex-grow items-center">
											<h2 class="text-right">
												<span>
													{{ item.title }}
												</span>
											</h2>
										</div>
										<div class="flex-shrink-0">
											<h4
												class="mb-4 whitespace-pre text-right text-base uppercase leading-4 2xl:text-xl"
											>
												{{ item.subtitle }}
											</h4>
										</div>
									</div>
									<div class="flex-shrink-0 text-right">
										<UButton
											size="lg"
											class="rounded-none bg-theme-primary-500 px-8 py-4 text-base shadow-lg hover:bg-theme-primary-400"
											to="/stuecke"
										>
											{{ ctaText }}
										</UButton>
									</div>
								</div>
							</div>
							<div class="h-full w-2/3">
								<img
									:src="item.src"
									:alt="item.title"
									class="h-full w-full object-cover object-center p-8"
									draggable="false"
								/>
							</div>
						</div>
					</div>
				</UCarousel>
			</div>

			<!-- PHONE SCREENS -->
			<div class="relative flex-grow overflow-hidden md:hidden">
				<UCarousel
					ref="carouselRef"
					v-slot="{ item }"
					:items="items"
					:ui="{
						item: 'basis-full',
						container: 'rounded-lg h-full',
						wrapper: 'h-full',
						indicators: {
							wrapper: 'relative bottom-28 mt-4',
						},
					}"
					indicators
					class="mx-auto w-[98%]"
				>
					<div class="relative h-full w-full">
						<!-- Slider Design for small Screens -->
						<div class="flex h-full flex-col px-2 pb-2">
							<div class="w-full flex-grow">
								<img
									:src="item.src"
									:alt="item.title"
									class="h-full w-full rounded-lg object-cover object-center"
									draggable="false"
								/>
							</div>
							<div
								class="bg-secondary mx-2 -mt-8 h-52 flex-shrink rounded-lg p-6 text-center text-background shadow-lg"
							>
								<h2 class="mb-2 text-2xl">{{ item.title }}</h2>
								<h4
									class="whitespace-pre text-sm uppercase leading-4 text-background"
								>
									{{ item.subtitle }}
								</h4>
							</div>
							<UButton
								to="/stuecke"
								size="lg"
								variant="solid"
								class="bg-accent mx-2 mt-3 justify-center p-4 text-base"
							>
								{{ ctaText }}
							</UButton>
						</div>
					</div>
				</UCarousel>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	/**
	 * PAGE: index.vue
	 *
	 * This is the landing page of the website.
	 */
	import { onMounted } from 'vue';
	import { useEventsStore } from '~/stores/events';

	definePageMeta({
		layout: 'home',
	});

	const eventsStore = useEventsStore();
	const config = useRuntimeConfig();

	onMounted(() => {
		if (config.public.useMockData) {
			return eventsStore.fetchTestEvents();
		} else {
			return eventsStore.fetchEvents();
		}
	});

	const ctaText = 'Spielplan und Tickets';

	const items = [
		{
			title: 'Theaterdeck\nHamburg',
			subtitle: '',
			to: '/stuecke',
			src: '/images/hero/hero-letters-shadow.jpg',
		},
		{
			title: 'So, amüsieren Sie sich?!',
			subtitle: 'INGRID LAUSUND\n Hysterikon',
			to: '/stuecke',
			src: '/images/hero/hero-highkey-windschief.jpg',
		},
		{
			title: 'Neue Termine November 2024',
			subtitle: 'GUNILLA BERGSTRÖM\n Willi Wiberg',
			to: '/stuecke',
			src: '/images/hero/hero-highkey-petterson.jpg',
		},
		{
			title:
				'Weil auch in diesen Zeiten irgendwer das Richtige tun muss, einfach, weil es richtig ist.',
			subtitle: 'KIRSTEN BOIE\n Dunkelnacht',
			to: '/stuecke',
			src: '/images/hero/hero-highkey-sr.jpg',
		},
	];

	const carouselRef = ref();

	onMounted(() => {
		setInterval(() => {
			if (!carouselRef.value) return;

			if (carouselRef.value.page === carouselRef.value.pages) {
				return carouselRef.value.select(0);
			}

			carouselRef.value.next();
		}, 7000);
	});
</script>

<style>
	.title-container {
		z-index: 20;
		container-type: inline-size;
	}

	.title-container h2 {
		/* font-size scales with container width:
     - 1rem is the minimum,
     - 5cqw is our ideal scaling factor,
     - 5rem is the maximum */
		font-size: clamp(1rem, 7cqh, 5rem);

		/* Ensure long words break so they don’t force unwanted overflow */
		overflow-wrap: break-word;
		word-break: break-word;
	}
</style>

<template>
	<UButton
		icon="i-heroicons-bars-3-16-solid"
		color="black"
		size="xl"
		variant="ghost"
		class="text-primary-600 scale-125 transition-transform duration-300 hover:scale-150"
		@click="isOpen = true"
	/>

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
				class="absolute right-6 top-6 scale-125 transition-transform duration-300 hover:scale-150 hover:bg-transparent"
				@click="isOpen = false"
			/>
			<div class="align-text-middle h-full p-4 pt-24">
				<NuxtLink to="/">
					<div class="mx-auto h-12 w-12">
						<TheLogo color="#f51663" />
					</div>
					<h2 class="text-primary-600 m-8 text-xl font-semibold uppercase">
						{{ title }}
					</h2>
				</NuxtLink>
				<nav class="flex flex-col text-lg">
					<NuxtLink
						v-for="link in burger_links"
						:key="link.to"
						:to="link.to"
						class="hover:text-primary-600"
						@click="isOpen = false"
					>
						{{ link.text }}
						<hr class="mx-auto my-4 w-6" />
					</NuxtLink>
				</nav>
			</div>
		</div>
	</USlideover>
</template>

<script setup lang="ts">
	import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

	const title = 'Theaterdeck';
	const burger_links = [
		{ to: '/stuecke', text: 'Spielplan' },
		{ to: '/schule', text: 'Theater Jugend' },
		{ to: '/vermietung', text: 'Vermietung' },
		{ to: '/kontakt', text: 'Kontakt' },
		{ to: '/datenschutz', text: 'Datenschutz' },
		{ to: '/impressum', text: 'Impressum' },
	];

	// reactive state to track if the menu is open
	const isOpen = ref(false);
	// viewport width
	const screenWidth = ref(0);

	// true when ≥lg (1024px)
	const isLarge = computed(() => screenWidth.value >= 1024);

	// derive the responsive info for the slideover menu
	const slideSide = computed(() => (isLarge.value ? 'right' : 'top'));
	const slideHeight = computed(() => (isLarge.value ? 'auto' : 'h-screen'));
	const slideWidth = computed(() =>
		isLarge.value ? 'w-screen max-w-sm' : 'w-full'
	);

	// update viewport width on resize
	const updateWidth = () => {
		screenWidth.value = window.innerWidth;
	};

	onMounted(() => {
		// set initially
		updateWidth();
		// then keep in sync
		window.addEventListener('resize', updateWidth);
	});

	onBeforeUnmount(() => window.removeEventListener('resize', updateWidth));
</script>

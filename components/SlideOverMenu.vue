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
				<NuxtLink to="/" class="block text-center" @click="isOpen = false">
					<div class="mx-auto h-12 w-12">
						<TheLogo color="#f51663" />
					</div>
					<h2 class="text-primary-600 m-8 text-xl font-semibold uppercase">
						{{ title }}
					</h2>
				</NuxtLink>

				<nav aria-label="Hauptnavigation" class="text-lg">
					<ul>
						<li
							v-for="(link, idx) in burger_links"
							:key="link.to"
							class="pb-3 pt-2"
						>
							<!-- Top-level link -->
							<NuxtLink
								v-if="link.to && link.to !== '#'"
								:to="link.to"
								class="hover:text-primary-600 focus-visible:ring-primary-500/40 group block rounded transition-colors focus:outline-none focus-visible:ring-2"
								:class="{
									'text-primary-600 font-medium': isActive(link.to),
								}"
								@click="isOpen = false"
							>
								<span class="inline-flex items-center uppercase">
									<span class="leading-tight">{{ link.text }}</span>
								</span>
							</NuxtLink>

							<!-- Non-link section headers (e.g., `to: '#'`) -->
							<span v-else class="block uppercase text-gray-900/90">
								{{ link.text }}
							</span>

							<!-- Children -->
							<ul v-if="link.children?.length" class="mt-2 space-y-2">
								<li v-for="child in link.children" :key="child.to">
									<NuxtLink
										:to="child.to"
										class="hover:text-primary-600 focus-visible:ring-primary-500/30 block rounded text-base text-gray-600 transition-colors focus:outline-none focus-visible:ring-2"
										:class="{
											'text-primary-600 font-small': isActive(child.to),
										}"
										@click="isOpen = false"
									>
										{{ child.text }}
									</NuxtLink>
								</li>
							</ul>

							<!-- Fancy separator between top-level items -->
							<div
								v-if="idx < burger_links.length - 1"
								class="text-primary-600 mt-4 flex items-center justify-center"
							>
								<span class="mx-1 h-1 w-1 rounded-full bg-current" />
								<span class="mx-1 h-1 w-1 rounded-full bg-current" />
								<span class="mx-1 h-1 w-1 rounded-full bg-current" />
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</USlideover>
</template>

<script setup lang="ts">
	import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
	import { useRoute } from 'vue-router';
	const route = useRoute();

	const title = 'Theaterdeck';
	const burger_links = [
		{ to: '/stuecke', text: 'Spielplan und Tickets' },
		{
			to: '/theater',
			text: 'Theater',
			children: [
				{ to: '/theater#ueber-uns', text: 'Über Uns' },
				{
					to: '/theater#theater-jugend',
					text: 'Theater Jugend Hamburg e.V.',
				},
			],
		},
		{ to: '/schule', text: 'Theaterschule' },
		{ to: '/vermietung', text: 'Vermietung Räume' },
		{
			to: '#',
			text: 'Service',
			children: [
				{ to: '/kontakt', text: 'Kontakt' },
				{ to: '/datenschutz', text: 'Datenschutz' },
				{ to: '/impressum', text: 'Impressum' },
			],
		},
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

	/**
	 * Simple active check for both normal routes and hash targets.
	 * Tweak as needed if you want exact matching.
	 */
	const isActive = (to: string) => {
		if (!to || to === '#') return false;
		// exact path or fullPath (includes hash), or prefix match for sections
		return (
			route.fullPath === to ||
			route.path === to ||
			(to && route.fullPath.startsWith(to.replace(/#.*$/, '')))
		);
	};
</script>

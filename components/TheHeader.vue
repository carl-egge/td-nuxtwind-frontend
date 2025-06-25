<template>
	<header
		class="bg-theme-secondary absolute z-20 w-full max-w-screen-2xl text-text shadow-lg"
	>
		<div class="flex w-full items-center justify-between px-4 py-2">
			<!-- Logo -->
			<div class="flex-grow pl-14 md:flex-grow-0 md:px-4">
				<NuxtLink to="/" class="block h-16 items-center gap-4 py-2 md:flex">
					<!-- <img :src="logoSrc" alt="Logo" class="w-full h-full object-contain" /> -->
					<TheLogo color="#f51663" />
					<h3
						class="text-primary-600 hidden font-sans text-xl font-bold uppercase leading-6 tracking-wide md:block"
					>
						Theaterdeck
						<br />
						Hamburg
					</h3>
				</NuxtLink>
			</div>

			<!-- Desktop Navigation -->
			<!-- <nav class="hidden space-x-8 text-sm uppercase md:flex">
				<ULink
					v-for="link in desktop_links"
					:key="link.to"
					:to="link.to"
					class="hover:underline hover:decoration-2 hover:underline-offset-4"
				>
					{{ link.text }}
				</ULink>
			</nav> -->

			<!-- Burger Menu Button -->
			<div class="md:pl-48">
				<SlideOverMenu />
			</div>
		</div>
	</header>
</template>

<script setup>
	/**
	 * TheHeader
	 *
	 * Navigation Bar at top including collapsable menu.
	 */
	// import logoSrc from '~/assets/images/td-nav-bar-logo-red.svg'

	// // const desktop_links = [
	// // 	{ to: '/stuecke', text: 'Spielplan' },
	// // 	{ to: '/schule', text: 'Kurse' },
	// // 	{ to: '/vermietung', text: 'Raummiete' },
	// // ];
</script>

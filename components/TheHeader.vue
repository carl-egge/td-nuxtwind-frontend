<template>
	<header
		class="absolute z-20 w-full max-w-screen-2xl bg-theme-secondary text-text shadow-lg"
	>
		<div class="flex h-fit w-full items-center justify-between px-4 py-2">
			<!-- Logo -->
			<!-- <div class="flex-grow pl-14 md:flex-grow-0 md:px-4">
				<NuxtLink to="/" class="block h-16 items-center gap-4 py-2 md:flex">
					<-- <img :src="logoSrc" alt="Logo" class="w-full h-full object-contain" /> --
					<TheLogo color="#f51663" />
					<h3
						class="text-primary-600 hidden font-sans text-xl font-bold uppercase leading-6 tracking-wide md:block"
					>
						Theaterdeck
						<br />
						Hamburg
					</h3>
				</NuxtLink>
			</div> -->
			<div class="h-16 flex-grow md:flex-grow-0 md:px-4 md:pl-4 lg:pl-8">
				<NuxtLink
					to="/"
					aria-label="Home"
					class="group relative inline-block h-16"
				>
					<!-- logo: fixed height = 4rem -->
					<TheLogo
						color="#f51663"
						class="block h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
					/>

					<!-- text: hidden off by default, fades in over the same 4rem box -->
					<h3
						class="text-primary-600 absolute inset-0 flex w-fit flex-col items-center justify-center text-left font-sans text-xl font-bold uppercase leading-tight tracking-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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

<template>
	<header
		class="absolute inset-x-0 top-0 z-20 mx-auto w-full max-w-screen-2xl bg-theme-secondary pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] text-text shadow-lg"
	>
		<div class="flex h-fit w-full items-center justify-start px-4 py-2">
			<!-- Logo -->
			<div class="h-16 flex-none md:flex-none md:px-4 md:pl-4 lg:pl-8">
				<NuxtLink to="/" aria-label="Home" class="group relative block h-16">
					<TheLogo
						color="#f51663"
						class="block h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
					/>
					<h3
						class="text-primary-600 absolute inset-0 flex w-auto flex-col items-center justify-center text-left font-sans text-xl font-bold uppercase leading-tight tracking-wide opacity-0 transition-all duration-300 group-hover:ml-10 group-hover:opacity-100 md:group-hover:ml-4"
					>
						Theaterdeck
						<br />
						Hamburg
					</h3>
				</NuxtLink>
			</div>

			<!-- Burger Menu Button -->
			<div class="ml-auto md:pl-48">
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

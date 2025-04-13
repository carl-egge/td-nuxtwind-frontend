<template>
	<header
		class="absolute z-20 w-full max-w-screen-2xl bg-text text-background shadow-lg"
	>
		<div class="flex w-full items-center justify-between px-4 py-2">
			<!-- Logo -->
			<div class="flex-grow pl-14 md:flex-grow-0 md:px-4">
				<NuxtLink to="/" class="block h-16 items-center gap-4 py-2 md:flex">
					<!-- <img :src="logoSrc" alt="Logo" class="w-full h-full object-contain" /> -->
					<TheLogo color="#fdf0cf" />
					<h1
						class="hidden font-mono text-2xl font-bold uppercase leading-6 tracking-wide md:block"
					>
						Theaterdeck
						<!-- <br /> -->
						<!-- Hamburg -->
					</h1>
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
				<UButton
					icon="i-heroicons-bars-3-16-solid"
					color="black"
					size="xl"
					variant="ghost"
					class="scale-150"
					@click="isOpen = true"
				/>
			</div>

			<!-- Slideover Menu -->
			<USlideover
				v-model="isOpen"
				side="top"
				:ui="{ strategy: 'override', height: 'h-screen' }"
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
							<h2
								class="text-primary mb-8 mt-2 text-xl font-semibold uppercase"
							>
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
	const title = 'Theaterdeck';
	const isOpen = ref(false);

	// const desktop_links = [
	// 	{ to: '/stuecke', text: 'Spielplan' },
	// 	{ to: '/schule', text: 'Kurse' },
	// 	{ to: '/vermietung', text: 'Raummiete' },
	// ];
	const burger_links = [
		{ to: '/stuecke', text: 'Spielplan' },
		{ to: '/schule', text: 'Theater Jugend' },
		{ to: '/vermietung', text: 'Raummiete' },
		{ to: '/kontakt', text: 'Kontakt' },
		{ to: '/datenschutz', text: 'Datenschutz' },
		{ to: '/impressum', text: 'Impressum' },
	];
</script>

<template>
	<NuxtLayout>
		<PageHero
			:title="String(props.error?.statusCode) || 'Error'"
			:breadcrumbs="[{ label: 'HOME', to: '/' }]"
			:background-image="`url(${heroimage})`"
		/>
		<main class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="my-10 flex flex-col items-center justify-between gap-8 text-center"
			>
				<div
					class="ring-primary-500 h-11 w-11 flex-none rounded-none p-2 ring-1"
				>
					<Icon
						name="game-icons:shooner-sailboat"
						class="text-primary-500 h-full w-full"
						aria-hidden="true"
					/>
				</div>
				<h3 aria-label="Error">Ups. Es ist ein Fehler aufgetreten.</h3>
				<p>
					{{ props.error?.statusMessage || 'An error occurred' }}
				</p>
				<UButton to="/" class="rounded-none" size="lg">
					Zurück zur Startseite
				</UButton>
			</div>
		</main>
	</NuxtLayout>
</template>

<script setup lang="ts">
	import heroimage from '/assets/images/sw/stuehle.jpg';
	import type { NuxtError } from '#app';

	const props = defineProps({
		error: {
			type: Object as () => NuxtError,
			default: () => ({ statusCode: 500, statusMessage: 'Unknown error' }),
		},
	});
</script>

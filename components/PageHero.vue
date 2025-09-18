<template>
	<div class="relative h-[65vh] w-full pt-20 shadow-lg">
		<div
			class="hero absolute inset-0 mt-[60px] bg-cover bg-center bg-no-repeat"
		/>
		<!-- <div
			class="absolute inset-0 bg-text bg-opacity-40 bg-cover bg-center bg-no-repeat"
		/> -->
		<div class="relative flex h-full items-end justify-center pb-16">
			<div
				class="max-w-screen-md break-words px-2 text-center uppercase md:px-8 lg:max-w-screen-xl"
			>
				<h1 class="hyphens-auto leading-tight" lang="de">
					{{ props.title }}
				</h1>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	/**
	 * PageHero with background image and title.
	 */
	import defaultBackground from '../assets/images/sw/reihe-zoom.webp';

	interface Props {
		title?: string;
		backgroundImage?: string;
		backgroundPosition?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		title: 'TheaterDECK',
		backgroundImage: defaultBackground,
		backgroundPosition: 'center center',
	});
</script>

<style scoped>
	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background: v-bind('props.backgroundImage');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: v-bind('props.backgroundPosition');
		width: 100%;
		height: 100%;
	}
</style>

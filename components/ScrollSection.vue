<template>
	<section
		:id="`section-${index}`"
		role="region"
		:aria-label="label"
		class="scroll-section relative flex h-screen"
		:class="
			reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'
		"
	>
		<!-- Image side -->
		<div
			class="shine-effect group relative h-1/2 w-full overflow-hidden lg:h-full lg:w-1/2"
		>
			<NuxtImg
				:src="image"
				:alt="alt"
				class="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:rotate-1 group-hover:scale-110"
				loading="eager"
			/>
			<div
				class="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
				:class="gradientClass"
			/>
		</div>
		<!-- Text side -->
		<div
			class="flex h-1/2 w-full items-center justify-center bg-text p-8 lg:h-full lg:w-1/2"
		>
			<div class="float-animation max-w-lg md:max-w-md lg:max-w-lg">
				<span class="text-primary-400 font-mono text-sm tracking-wider">
					{{ index }} / {{ label }}
				</span>
				<h1
					class="mt-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-4xl font-bold leading-none text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
				>
					{{ title }}
				</h1>
				<p class="text-md mt-6 leading-relaxed text-background lg:text-lg">
					{{ quote }}
				</p>
				<UButton
					to="/stuecke"
					size="lg"
					variant="solid"
					class="mt-3 justify-center rounded-none px-8 py-4 text-background"
				>
					{{ ctaText }}
				</UButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	// Props only, thanks to Nuxt’s auto-imports
	defineProps<{
		index: number;
		label: string;
		title: string;
		quote: string;
		image: string;
		alt: string;
		gradientClass: string;
		reverse?: boolean;
		ctaText: string;
	}>();
</script>

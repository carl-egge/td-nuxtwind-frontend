<template>
	<section
		:id="`section-${index}`"
		role="region"
		:aria-label="label"
		class="scroll-section relative flex h-screen"
		:class="reverse ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'"
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
			class="flex h-1/2 w-full items-center justify-center bg-theme-secondary p-8 pb-32 lg:h-full lg:w-1/2 lg:pb-12"
		>
			<div class="float-animation w-full max-w-lg md:max-w-md lg:max-w-lg">
				<span class="text-primary-600 font-mono text-sm tracking-wider">
					{{ index }} / {{ label }}
				</span>
				<div class="mt-4 w-full">
					<h1>
						{{ title }}
					</h1>
				</div>
				<p class="text-md text-primary-600 mt-6 leading-relaxed lg:text-lg">
					"{{ quote || 'Kommt vorbei!' }}"
				</p>
				<!-- <UButton
					to="/stuecke"
					variant="solid"
					class="flex h-32 w-32 items-center justify-center rounded-full bg-red-500 text-background"
				>
					{{ ctaText }}
				</UButton> -->
			</div>
			<!-- :class="ctaButtonClasses" -->
			<!-- <NuxtLink
				to="/stuecke"
				aria-label="Tickets"
				class="group absolute -bottom-4 -right-4 block h-52 w-52 -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105 lg:-left-60 lg:right-0 lg:me-auto lg:ms-auto lg:h-64 lg:w-64 lg:rotate-6 xl:-left-80 xl:bottom-4 xl:h-96 xl:w-96"
			>
				<svg
					viewBox="0 0 480 480"
					class="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-105"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#fac218"
						d="M395.712,240 Q368.5593873417986,305.60819706018026 362.9980088455405,319.04602055443405 Q306.6236043716255,353.5373956448795 295.0770395998598,360.60189415738034 Q231.54048958776613,384.4612774860368 218.52697934432527,389.3481391316652 Q155.9583522768417,358.1656136442555 143.14309131121254,351.7788313155089 Q109.4718535422772,292.4941649471893 102.57533496309767,280.3515224380154 Q85.82579700063415,208.44988710065365 82.3951687432621,193.72304612794102 Q129.61592592324243,135.6634695746937 139.28764727335889,123.7717490758358 Q205.80172882881897,101.46686268394083 219.4250949305397,96.89839197716717 Q290.70952600611963,96.97538442874782 305.3099516481059,96.99115396702337 Q349.3054720253195,152.5774014614045 358.31660270498975,163.96253649037413 Q389.35478245984825,227.0736312033636 395.712,240 Z"
						/>
					</svg>
					<span
					class="hover:text-primary-600 absolute inset-0 flex items-center justify-center text-xl font-semibold uppercase text-background"
					>
					{{ ctaText }}
				</span>
			</NuxtLink> -->
			<NuxtLink
				:to="'/stuecke/' + slug"
				aria-label="Tickets"
				class="group absolute bottom-0 right-0 -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"
			>
				<svg
					viewBox="0 0 480 480"
					xmlns="http://www.w3.org/2000/svg"
					class="pointer-events-none h-40 w-40 drop-shadow-lg transition-transform duration-300 group-hover:scale-105 md:h-60 md:w-60 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
				>
					<path
						fill="#fac218"
						class="pointer-events-auto"
						d="M395.712,240 Q368.5593873417986,305.60819706018026 362.9980088455405,319.04602055443405 Q306.6236043716255,353.5373956448795 295.0770395998598,360.60189415738034 Q231.54048958776613,384.4612774860368 218.52697934432527,389.3481391316652 Q155.9583522768417,358.1656136442555 143.14309131121254,351.7788313155089 Q109.4718535422772,292.4941649471893 102.57533496309767,280.3515224380154 Q85.82579700063415,208.44988710065365 82.3951687432621,193.72304612794102 Q129.61592592324243,135.6634695746937 139.28764727335889,123.7717490758358 Q205.80172882881897,101.46686268394083 219.4250949305397,96.89839197716717 Q290.70952600611963,96.97538442874782 305.3099516481059,96.99115396702337 Q349.3054720253195,152.5774014614045 358.31660270498975,163.96253649037413 Q389.35478245984825,227.0736312033636 395.712,240 Z"
					/>
				</svg>
				<span
					class="group-hover:text-primary-600 pointer-events-none absolute inset-0 flex items-center justify-center text-xl font-semibold uppercase text-background"
				>
					{{ ctaText }}
				</span>
			</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
	defineProps<{
		index: number;
		label: string;
		title: string;
		slug: string;
		quote: string;
		image: string;
		alt: string;
		gradientClass: string;
		reverse?: boolean;
		ctaText: string;
	}>();
</script>

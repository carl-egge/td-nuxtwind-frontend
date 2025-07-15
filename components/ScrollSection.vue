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
				<span class="text-primary-600 text-sm tracking-wider">
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
			</div>
			<!-- CTA Button -->
			<NuxtLink
				:to="`/stuecke/${slug}`"
				aria-label="Tickets"
				class="group absolute bottom-2 right-8 inline-block h-32 w-32 -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105 md:bottom-8 md:h-40 md:w-40 lg:h-56 lg:w-56 xl:right-24 xl:h-72 xl:w-72"
			>
				<svg
					viewBox="82 96 314 293"
					xmlns="http://www.w3.org/2000/svg"
					class="pointer-events-none h-full w-full drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
				>
					<path
						fill="#fac218"
						class="pointer-events-auto"
						d="M395.712,240 Q368.5593873417986,305.60819706018026 362.9980088455405,319.04602055443405 Q306.6236043716255,353.5373956448795 295.0770395998598,360.60189415738034 Q231.54048958776613,384.4612774860368 218.52697934432527,389.3481391316652 Q155.9583522768417,358.1656136442555 143.14309131121254,351.7788313155089 Q109.4718535422772,292.4941649471893 102.57533496309767,280.3515224380154 Q85.82579700063415,208.44988710065365 82.3951687432621,193.72304612794102 Q129.61592592324243,135.6634695746937 139.28764727335889,123.7717490758358 Q205.80172882881897,101.46686268394083 219.4250949305397,96.89839197716717 Q290.70952600611963,96.97538442874782 305.3099516481059,96.99115396702337 Q349.3054720253195,152.5774014614045 358.31660270498975,163.96253649037413 Q389.35478245984825,227.0736312033636 395.712,240 Z"
					/>
				</svg>
				<div
					class="group-hover:text-primary-400 pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-xl font-semibold uppercase text-background lg:text-4xl"
				>
					<span>SPIELPLAN</span>
					<span class="flex items-start">
						<span class="text-2xl lg:text-6xl">&amp;</span>
						TICKETS
					</span>
				</div>
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

<style scoped>
	/* Global animations and scroll styles unchanged */
	@keyframes reveal {
		from {
			clip-path: inset(0 100% 0 0);
		}
		to {
			clip-path: inset(0 0 0 0);
		}
	}
	@keyframes textReveal {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
	@keyframes shine {
		from {
			transform: translateX(-100%) rotate(45deg);
		}
		to {
			transform: translateX(200%) rotate(45deg);
		}
	}
	.shine-effect::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.2),
			transparent
		);
		transform: translateX(-100%) rotate(45deg);
	}
	.shine-effect:hover::before {
		animation: shine 1.5s;
	}
	.float-animation {
		animation: float 6s ease-in-out infinite;
	}
	.split-reveal {
		animation: reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1);
	}
	.text-reveal {
		animation: textReveal 0.8s cubic-bezier(0.77, 0, 0.175, 1);
	}

	@keyframes kenburns {
		0% {
			transform: scale(1) translate(0, 0);
		}
		50% {
			transform: scale(1.05) translate(-2%, -2%);
		}
		100% {
			transform: scale(1) translate(0, 0);
		}
	}

	@keyframes mobile-shine {
		/* start with the gradient fully off to the left */
		0% {
			background-position: -100% center;
		}
		/* end with it fully off to the right */
		100% {
			background-position: 100% center;
		}
	}

	@media (hover: none) {
		.shine-effect::after {
			content: '';
			position: absolute;
			inset: 0; /* cover the whole container */
			pointer-events: none;

			/* the same “light sweep” gradient, but: */
			background: linear-gradient(
				120deg,
				rgba(255, 255, 255, 0) 0%,
				rgba(255, 255, 255, 0.2) 25%,
				rgba(255, 255, 255, 0) 50%
			);

			background-repeat: no-repeat; /* ← no more tiling seams */
			background-size: 600% 100%; /* ← big enough to let the fade never clip */
			background-position: -100% center; /* ← start off-screen */

			animation: mobile-shine 6s ease-in-out infinite;
		}
	}
</style>

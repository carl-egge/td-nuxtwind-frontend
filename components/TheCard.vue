<template>
	<div
		class="relative h-[clamp(10rem,75vw,22rem)] w-[clamp(10rem,75vw,22rem)] overflow-hidden md:h-[clamp(16rem,42vw,28rem)] md:w-[clamp(16rem,42vw,28rem)]"
	>
		<UCard
			class="border-primary-600 group relative m-0 h-full w-full rounded-none border sm:mx-auto sm:max-w-md"
			:ui="{
				base: 'rounded-none',
				background: 'bg-primary-600',
				body: { padding: 'p-0 sm:p-0' },
			}"
		>
			<!-- Click surface keeps hover effects but doesn't open overlay -->
			<div
				class="relative m-0 h-full w-full rounded-none"
				:aria-label="ariaLabel"
			>
				<!-- Overlay -->
				<div
					class="absolute inset-0 z-10 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"
				/>

				<!-- Image -->
				<div
					class="z-10 h-full w-full overflow-hidden rounded-none border border-gray-200 dark:border-gray-700"
				>
					<NuxtImg
						:src="src"
						:alt="alt || title"
						class="animate-fade-in block h-full w-full object-cover object-center transition duration-300 motion-safe:group-hover:scale-110"
					/>
				</div>

				<!-- Title -->
				<div
					class="pointer-events-none absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-3 motion-safe:group-hover:scale-110 md:pb-8 md:ps-8"
				>
					<h1 class="leading-tight" lang="de">
						{{ title }}
					</h1>
				</div>

				<!-- Open button (bottom-right) -->
				<UButton
					v-if="!open"
					type="button"
					:aria-controls="panelId"
					:aria-expanded="open ? 'true' : 'false'"
					:aria-label="`Mehr Details zu ${title} öffnen`"
					variant="ghost"
					color="white"
					class="blob-button group absolute bottom-6 right-6 z-30 inline-grid h-14 w-14 -rotate-6 place-items-center rounded-none border-0 bg-transparent p-0 shadow-none ring-0 transition-transform duration-300 [--blob-color:#f51663] hover:rotate-0 hover:scale-105 hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:h-16 sm:w-16"
					@click="openPanel"
				>
					<!-- The blob shape -->
					<svg
						viewBox="82 96 314 293"
						xmlns="http://www.w3.org/2000/svg"
						class="pointer-events-none block h-full w-full transition-transform duration-300 group-hover:scale-105"
					>
						<path
							d="M395.712,240 Q368.5593873417986,305.60819706018026 362.9980088455405,319.04602055443405 Q306.6236043716255,353.5373956448795 295.0770395998598,360.60189415738034 Q231.54048958776613,384.4612774860368 218.52697934432527,389.3481391316652 Q155.9583522768417,358.1656136442555 143.14309131121254,351.7788313155089 Q109.4718535422772,292.4941649471893 102.57533496309767,280.3515224380154 Q85.82579700063415,208.44988710065365 82.3951687432621,193.72304612794102 Q129.61592592324243,135.6634695746937 139.28764727335889,123.7717490758358 Q205.80172882881897,101.46686268394083 219.4250949305397,96.89839197716717 Q290.70952600611963,96.97538442874782 305.3099516481059,96.99115396702337 Q349.3054720253195,152.5774014614045 358.31660270498975,163.96253649037413 Q389.35478245984825,227.0736312033636 395.712,240 Z"
							class="fill-[color:var(--blob-color)]"
						/>
					</svg>

					<!-- Centered icon on top -->
					<span
						class="pointer-events-none absolute inset-0 grid place-content-center text-xl font-semibold uppercase text-background"
					>
						<Icon
							name="material-symbols:more-horiz"
							class="h-8 w-8"
							aria-hidden="true"
						/>
					</span>
				</UButton>

				<!-- <button
					type="button"
					class="absolute bottom-10 right-4 z-30 inline-flex items-center justify-center rounded-full bg-black/50 p-2 text-white/95 shadow-lg ring-1 ring-white/20 backdrop-blur transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
					:aria-controls="panelId"
					:aria-expanded="open ? 'true' : 'false'"
					:aria-label="`Mehr Details zu ${title} öffnen`"
					@click="openPanel"
				>
				</button> -->

				<!-- Slide-over overlay -->
				<Transition
					enter-active-class="transition duration-300 ease-out"
					enter-from-class="translate-y-full opacity-0"
					enter-to-class="translate-y-0 opacity-100"
					leave-active-class="transition duration-250 ease-in"
					leave-from-class="translate-y-0 opacity-100"
					leave-to-class="translate-y-full opacity-0"
				>
					<section
						v-if="open"
						:id="panelId"
						ref="panelRef"
						class="bg-primary-600 absolute inset-0 z-20 grid grid-rows-[auto,1fr] text-white"
						role="region"
						:aria-label="`Zusätzliche Informationen über ${title}`"
						@keydown.esc.stop.prevent="closePanel"
					>
						<!-- Top bar -->
						<div
							class="flex items-center justify-between gap-2 px-4 py-3 md:px-6 md:py-4"
						>
							<div class="min-w-0">
								<h3 class="text-background">
									{{ title }}
								</h3>
								<p
									v-if="subtitle"
									class="truncate text-xs text-background md:text-sm"
								>
									{{ subtitle }}
								</p>
							</div>

							<div class="flex items-center gap-2">
								<UButton
									v-if="ctaLabel && ctaHref"
									size="sm"
									color="white"
									variant="ghost"
									class="ring-1 ring-white/20 hover:bg-white/10"
									:label="ctaLabel"
									:to="ctaHref"
								/>
								<button
									ref="closeBtnRef"
									type="button"
									class="inline-flex h-8 w-8 items-center justify-center rounded bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
									:aria-label="`Details schließen`"
									@click="closePanel"
								>
									<Icon
										name="i-heroicons-x-mark-20-solid"
										class="h-5 w-5"
										aria-hidden="true"
									/>
								</button>
							</div>
						</div>

						<!-- Content -->
						<div
							class="prose prose-invert max-w-none overflow-y-auto px-4 pb-5 md:px-6 md:pb-6"
						>
							<slot>
								<p class="leading-relaxed text-background">
									{{ details }}
								</p>
							</slot>
						</div>
					</section>
				</Transition>

				<!-- subtle inner ring on hover -->
				<div
					class="pointer-events-none absolute inset-0 z-10 rounded-none ring-0 transition group-hover:ring-2 group-hover:ring-white/30"
				/>
			</div>
		</UCard>
	</div>
</template>

<script setup lang="ts">
	import { computed, onMounted, ref, useId, watch } from 'vue';

	interface Props {
		src: string;
		title: string;
		subtitle?: string;
		details?: string;
		alt?: string;
		/** Optional: add a CTA button in the overlay header */
		ctaLabel?: string;
		ctaHref?: string;
		/** Start open (useful for demos) */
		defaultOpen?: boolean;
	}

	const props = defineProps<Props>();
	const open = ref(!!props.defaultOpen);
	const panelId = useId();
	// const modalId = useId(); // kept if you need external aria-controls; unused visually

	const ariaLabel = computed(
		() =>
			`Mehr Informationen über ${props.title}${props.subtitle ? `, ${props.subtitle}` : ''}`
	);

	const {
		src,
		title,
		subtitle,
		details = 'Mehr Informationen folgen in Kürze…',
		alt,
		ctaLabel,
		ctaHref,
	} = props;

	// focus mgmt for accessibility
	const panelRef = ref<HTMLElement | null>(null);
	const closeBtnRef = ref<HTMLButtonElement | null>(null);

	function openPanel() {
		open.value = true;
		// focus close after paint
		requestAnimationFrame(() =>
			closeBtnRef.value?.focus({ preventScroll: true })
		);
	}
	function closePanel() {
		open.value = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!open.value) return;
		// trap TAB within panel
		if (e.key === 'Tab' && panelRef.value) {
			const focusables = panelRef.value.querySelectorAll<HTMLElement>(
				'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])'
			);
			const list = Array.from(focusables).filter(
				(el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
			);
			if (list.length === 0) return;
			const first = list[0];
			const last = list[list.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}
	}

	onMounted(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	watch(open, (v) => {
		if (!v) {
			// return focus to the open button for context
			// (best-effort: pick the last open button in DOM)
			const opener = document.querySelector<HTMLButtonElement>(
				`[aria-controls="${panelId}"]`
			);
			opener?.focus?.({ preventScroll: true });
		}
	});
</script>

<style scoped>
	h1 {
		font-size: clamp(1.5rem, 2vw + 1.5rem, 3.5rem) !important;
		line-height: 1 !important;
	}

	/* Respect reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.motion-safe\:group-hover\:scale-110 {
			transform: none !important;
		}
	}
</style>

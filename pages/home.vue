<template>
	<!-- Main scroll container with a ref to easily access the element -->
	<div
		ref="container"
		class="scroll-container h-screen overflow-y-auto overflow-x-hidden"
	>
		<!-- Section 1 -->
		<section class="scroll-section relative flex h-screen flex-col md:flex-row">
			<!-- Left content -->
			<div
				class="shine-effect group relative h-1/2 w-full overflow-hidden md:h-full md:w-1/2"
			>
				<!-- src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba" -->
				<img
					src="/images/hero/hero-letters-shadow.jpg"
					alt="Theaterdeck Hamburg"
					class="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:rotate-1 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-r from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"
				/>
			</div>
			<!-- Right content -->
			<div
				class="flex h-1/2 w-full items-center justify-center bg-text p-8 md:h-full md:w-1/2"
			>
				<div class="float-animation max-w-lg">
					<span class="text-primary-400 font-mono text-sm tracking-wider">
						01 / Willkommen an Deck
					</span>
					<h2
						class="mt-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-5xl font-bold leading-none text-transparent md:text-7xl"
					>
						Theaterdeck Hamburg
					</h2>
					<p class="mt-6 text-lg leading-relaxed text-background">
						Wir spielen mit Liebe zum Detail und dem Ton, der ins Herz trifft.
					</p>
					<UButton
						to="/stuecke"
						size="lg"
						variant="solid"
						class="mt-3 justify-center rounded-none px-8 py-4"
					>
						{{ ctaText }}
					</UButton>
				</div>
			</div>
		</section>

		<!-- Section 2 -->
		<section class="scroll-section relative flex h-screen flex-col md:flex-row">
			<!-- Right content -->
			<div
				class="flex h-1/2 w-full items-center justify-center bg-text p-8 md:h-full md:w-1/2"
			>
				<div class="float-animation max-w-lg">
					<span class="text-primary-400 font-mono text-sm tracking-wider">
						02 / Otfried Preußler
					</span>
					<h2
						class="mt-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-5xl font-bold leading-none text-transparent md:text-7xl"
					>
						Räuber Hotzenplotz
					</h2>
					<p class="mt-6 text-lg leading-relaxed text-background">
						"Einem Räuber wird heutzutage auch nix mehr geschenkt."
					</p>
					<UButton
						to="/stuecke"
						size="lg"
						variant="solid"
						class="mt-3 justify-center rounded-none px-8 py-4"
					>
						{{ ctaText }}
					</UButton>
					<!-- <button
						class="mt-8 rounded-full bg-white/10 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:tracking-wider"
					>
						Tickets →
					</button> -->
				</div>
			</div>
			<!-- Left content -->
			<div
				class="shine-effect group relative h-1/2 w-full overflow-hidden md:h-full md:w-1/2"
			>
				<!-- src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" -->
				<img
					src="/images/hero/hero-hotzenplotz.jpeg"
					alt="Räuber Hotzenplotz von Ottfried Preußler"
					class="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:rotate-1 group-hover:scale-110"
				/>
				<div
					class="from-primary/50 to-primary/30 absolute inset-0 bg-gradient-to-l transition-opacity duration-500 group-hover:opacity-0"
				/>
			</div>
		</section>

		<!-- Section 3 -->
		<section class="scroll-section relative flex h-screen flex-col md:flex-row">
			<!-- Left content -->
			<div
				class="shine-effect group relative h-1/2 w-full overflow-hidden md:h-full md:w-1/2"
			>
				<!-- src="https://images.unsplash.com/photo-1682687220067-dced0a5865c5" -->
				<img
					src="/images/hero/hero-dunkelnacht.jpeg"
					alt="Dunkelnacht von Kirsten Boie"
					class="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:rotate-1 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-r from-background/50 to-background/30 transition-opacity duration-500 group-hover:opacity-0"
				/>
			</div>
			<!-- Right content -->
			<div
				class="flex h-1/2 w-full items-center justify-center bg-text p-8 md:h-full md:w-1/2"
			>
				<div class="float-animation max-w-lg">
					<span class="text-primary-400 font-mono text-sm tracking-wider">
						03 / KIRSTEN BOIE
					</span>
					<h2
						class="mt-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-5xl font-bold leading-none text-transparent md:text-7xl"
					>
						Dunkelnacht
					</h2>
					<p class="mt-6 text-lg leading-relaxed text-background">
						"Weil auch in diesen Zeiten irgendwer das Richtige tun muss,
						einfach, weil es richtig ist."
					</p>
					<UButton
						to="/stuecke"
						size="lg"
						variant="solid"
						class="mt-3 justify-center rounded-none px-8 py-4"
					>
						{{ ctaText }}
					</UButton>
					<!-- <button
						class="mt-8 rounded-full bg-white/10 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:tracking-wider"
					>
						Tickets →
					</button> -->
				</div>
			</div>
		</section>

		<!-- Navigation dots -->
		<div
			class="fixed right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4"
		>
			<button
				class="h-3 w-3 rounded-full bg-white/20 transition-colors hover:scale-150 hover:bg-white"
				title="Go to section 1"
				@click="scrollToSection(0)"
			/>
			<button
				class="h-3 w-3 rounded-full bg-white/20 transition-colors hover:scale-150 hover:bg-white"
				title="Go to section 2"
				@click="scrollToSection(1)"
			/>
			<button
				class="h-3 w-3 rounded-full bg-white/20 transition-colors hover:scale-150 hover:bg-white"
				title="Go to section 3"
				@click="scrollToSection(2)"
			/>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	definePageMeta({
		layout: false,
	});

	const isScrolling = ref(false);
	const container = ref(null);
	let sections, dots;

	const ctaText = 'Tickets →';

	const scrollToSection = (index) => {
		if (!isScrolling.value) {
			isScrolling.value = true;
			sections[index].scrollIntoView({ behavior: 'smooth' });
			updateDots(index);
			setTimeout(() => {
				isScrolling.value = false;
			}, 1000);
		}
	};

	const updateDots = (index) => {
		dots.forEach((dot, i) => {
			dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
				i === index
					? 'bg-white scale-150'
					: 'bg-white/20 hover:bg-white hover:scale-150'
			}`;
		});
	};

	onMounted(() => {
		// Use the ref on the container for easy DOM access
		sections = container.value.querySelectorAll('.scroll-section');
		dots = document.querySelectorAll('.fixed.right-8 button');

		container.value.addEventListener('scroll', () => {
			const index = Math.round(container.value.scrollTop / window.innerHeight);
			updateDots(index);
		});

		// Initialize the first dot
		updateDots(0);
	});
</script>

<style>
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

	.scroll-container {
		scroll-snap-type: y mandatory;
		-webkit-overflow-scrolling: touch;
	}

	.scroll-section {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	.content-mask {
		-webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
		mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
		/* -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
		mask-image: linear-gradient(to bottom, black 80%, transparent 100%);  */
	}
</style>

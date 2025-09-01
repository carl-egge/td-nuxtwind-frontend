<template>
	<div class="my-4">
		<!-- Bar -->
		<div
			class="border-primary-600 relative overflow-x-auto rounded-none border bg-transparent"
		>
			<nav
				ref="navRef"
				class="divide-primary flex divide-x px-0"
				role="tablist"
				aria-label="Tabs"
				@keydown="onKeydown"
				@scroll="updateIndicator"
			>
				<button
					v-for="(it, i) in items"
					:id="`tab-${uid}-${i}`"
					:key="it.slot"
					:ref="(el) => setBtnRef(el as HTMLElement, i)"
					:class="
						i === active
							? 'text-primary-600 border-primary-600'
							: 'bg-transparent text-text'
					"
					class="hover:text-primary-600 focus-visible:ring-primary-500 relative -mb-px w-full border-b-2 px-1 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring"
					role="tab"
					:aria-selected="i === active"
					:tabindex="i === active ? 0 : -1"
					:aria-controls="`panel-${uid}-${i}`"
					@click="active = i"
				>
					{{ it.label }}
				</button>
			</nav>

			<!-- Animated active underline -->
			<span
				class="bg-primary-600 pointer-events-none absolute bottom-0 h-0.5 transition-all duration-300 ease-out"
				:style="{
					transform: `translateX(${indicator.left}px)`,
					width: indicator.width + 'px',
				}"
			/>
		</div>

		<!-- Panels -->
		<section class="pt-4">
			<div
				v-for="(it, i) in items"
				:id="`panel-${uid}-${i}`"
				:key="it.slot"
				role="tabpanel"
				:aria-labelledby="`tab-${uid}-${i}`"
				:hidden="i !== active"
			>
				<slot :name="it.slot" />
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted, watch, nextTick } from 'vue';

	type TabItem = { label: string; slot: string };

	const props = defineProps<{
		items: TabItem[];
		modelValue?: number;
	}>();

	const emit = defineEmits<{ 'update:modelValue': [number] }>();

	const active = ref(props.modelValue ?? 0);
	watch(
		() => props.modelValue,
		(v) => {
			if (v !== undefined) active.value = v;
		}
	);
	watch(active, (v) => emit('update:modelValue', v));

	const navRef = ref<HTMLElement | null>(null);
	const btnRefs = ref<HTMLElement[]>([]);
	const indicator = ref({ left: 0, width: 0 });
	const uid = Math.random().toString(36).slice(2, 9);

	function setBtnRef(el: HTMLElement | null, i: number) {
		if (el) btnRefs.value[i] = el;
	}

	function updateIndicator() {
		const nav = navRef.value;
		const btn = btnRefs.value[active.value];
		if (!nav || !btn) return;
		const navBox = nav.getBoundingClientRect();
		const btnBox = btn.getBoundingClientRect();
		indicator.value = {
			left: btnBox.left - navBox.left + nav.scrollLeft,
			width: btnBox.width,
		};
	}

	function onKeydown(e: KeyboardEvent) {
		const max = props.items.length - 1;
		if (e.key === 'ArrowRight') {
			active.value = active.value === max ? 0 : active.value + 1;
			e.preventDefault();
		} else if (e.key === 'ArrowLeft') {
			active.value = active.value === 0 ? max : active.value - 1;
			e.preventDefault();
		} else if (e.key === 'Home') {
			active.value = 0;
			e.preventDefault();
		} else if (e.key === 'End') {
			active.value = max;
			e.preventDefault();
		}
	}

	onMounted(async () => {
		await nextTick();
		updateIndicator();
		window.addEventListener('resize', updateIndicator);
	});
	watch(active, async () => {
		await nextTick();
		updateIndicator();
	});
</script>

<style scoped>
	/* Optional: hide scrollbar in WebKit while keeping scrollability */
	::-webkit-scrollbar {
		display: none;
	}
</style>

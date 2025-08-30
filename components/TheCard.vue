<template>
	<div>
		<UCard
			class="sm:max-h-md group relative m-0 h-full w-full rounded-none shadow-lg sm:mx-auto sm:max-w-md"
			:ui="{
				base: 'rounded-none',
				background: 'bg-primary-600',
				body: {
					padding: 'p-0 sm:p-0',
				},
			}"
		>
			<div
				class="relative m-0 h-full w-full cursor-pointer rounded-none"
				role="button"
				tabindex="0"
				:aria-label="ariaLabel"
				aria-haspopup="dialog"
				:aria-controls="modalId"
				@click="open = true"
				@keydown.enter.prevent="open = true"
				@keydown.space.prevent="open = true"
			>
				<!-- Image wrapper -->
				<div
					class="z-10 h-full w-full overflow-hidden rounded-none border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
				>
					<NuxtImg
						:src="src"
						:alt="alt || title"
						class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
					/>
				</div>

				<!-- Title/subtitle -->
				<div
					class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 md:pb-8 md:ps-8"
				>
					<h1 class="leading-tight" lang="de">
						{{ title }}
					</h1>
					<!-- <h2 class="text-sm font-light text-gray-200 shadow-xl">
						{{ subtitle }}
					</h2> -->
				</div>

				<!-- Clickable indicator icon -->
				<Icon
					name="mdi:gesture-tap"
					class="pointer-events-none absolute right-2 top-2 h-5 w-5 text-white/90 drop-shadow"
					aria-hidden="true"
				/>
			</div>
		</UCard>

		<!-- MODAL with more details -->
		<UModal
			:id="modalId"
			v-model="open"
			:ui="{
				container: 'items-center',
				base: 'rounded-none border border-primary-600',
				background: 'bg-background',
			}"
			:aria-label="`More details about ${title}`"
			role="dialog"
		>
			<UCard
				:ui="{
					ring: '',
					rounded: 'rounded-none',
					background: 'bg-background',
					divide: 'divide-y divide-primary-600',
				}"
			>
				<template #header>
					<div class="flex items-center justify-between">
						<div>
							<h3 class="text-lg">
								{{ title }}
							</h3>
							<p v-if="subtitle" class="m-0 text-sm text-gray-500">
								{{ subtitle }}
							</p>
						</div>
						<UButton
							color="gray"
							variant="ghost"
							icon="i-heroicons-x-mark-20-solid"
							class="-my-1 scale-125"
							@click="open = false"
						/>
					</div>
				</template>

				<div class="prose prose-invert max-w-none">
					<slot>
						<p>{{ details }}</p>
					</slot>
				</div>
			</UCard>
		</UModal>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref, useId } from 'vue';

	interface Props {
		src: string;
		title: string;
		subtitle: string;
		details?: string;
		alt?: string;
	}

	const props = defineProps<Props>();
	const open = ref(false);
	const modalId = useId();

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
	} = props;
</script>

<style scoped>
	h1 {
		font-size: clamp(1rem, 5vw, 3rem) !important;
		line-height: 1 !important;
	}
</style>

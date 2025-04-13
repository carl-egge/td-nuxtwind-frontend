<template>
	<div class="relative h-[70vh] w-full pt-20">
		<div
			class="hero absolute inset-0 mt-[60px] bg-cover bg-center bg-no-repeat"
		/>
		<div
			class="absolute inset-0 bg-text bg-opacity-40 bg-cover bg-center bg-no-repeat"
		/>
		<div class="relative flex h-full items-end pb-16">
			<div
				class="bg-primary mx-4 w-full break-words px-2 pb-8 pt-16 text-center uppercase md:px-8"
			>
				<!-- <Icon name="mingcute:lighthouse-line" class="h-8 w-8 text-[#10b4ca]" aria-hidden="true" /> -->
				<h1 class="mb-2 break-all text-4xl leading-tight md:text-6xl">
					{{ title }}
				</h1>
				<!-- <UBreadcrumb v-if="breadcrumbs.length > 0" :links="fullBreadcrumbs" class="mt-4"
                    :ui="{ ol: 'justify-center', base: 'font-bold text-white', inactive: 'hover:text-accent' }">
                    <template #link="{ link }">
                        <NuxtLink :to="link.to">
                            {{ link.label }}
                        </NuxtLink>
                    </template>
<template #divider>
                        <span class="w-4 mx-2 h-0.5 rounded-full bg-background dark:bg-text" />
                    </template>
</UBreadcrumb> -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	interface Breadcrumb {
		label: string;
		to: string;
		icon?: string;
	}

	interface Props {
		title?: string;
		breadcrumbs?: Breadcrumb[];
		backgroundImage?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		title: 'TheaterDECK',
		breadcrumbs: () => [],
		backgroundImage: '',
	});

	// Add the current page to the breadcrumbs
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const fullBreadcrumbs = computed(() => [
		...props.breadcrumbs,
		{ label: props.title.toUpperCase(), to: '' },
	]);
</script>

<style scoped>
	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		border-radius: 0.25rem;
		left: 0;
		background: v-bind('backgroundImage');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top center;
		width: 100%;
		height: 100%;
	}
</style>

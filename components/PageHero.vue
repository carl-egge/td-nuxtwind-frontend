<template>
    <div class="relative h-[65vh] w-full pt-20">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat hero"></div>
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-text bg-opacity-20"></div>
        <div class="relative flex h-full items-end pb-16">
            <div
                class="w-full break-words mx-2 rounded bg-primary text-background px-2 md:px-8 pb-8 pt-16 text-center uppercase font-semibold">
                <!-- <Icon name="mingcute:lighthouse-line" class="h-8 w-8 text-[#10b4ca]" aria-hidden="true" /> -->
                <h1 class="break-all mb-2 text-4xl md:text-6xl leading-tight">{{ title }}</h1>
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
    title: string;
    breadcrumbs: Breadcrumb[];
    backgroundImage: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'TheaterDECK',
    breadcrumbs: () => [],
    backgroundImage: '',
});

// Add the current page to the breadcrumbs
const fullBreadcrumbs = computed(() => [
    ...props.breadcrumbs,
    { label: props.title.toUpperCase(), to: '' }
]);
</script>

<style scoped>
.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: v-bind("backgroundImage");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    width: 100%;
    height: 100%;
}
</style>
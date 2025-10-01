<template>
	<div>
		<div
			class="group relative mx-auto my-12 block min-h-48 max-w-7xl rounded bg-white shadow-md hover:cursor-pointer hover:bg-background md:max-w-5xl xl:max-w-7xl"
		>
			<span
				class="border-primary absolute inset-0 rounded border-2 border-dashed"
			/>
			<div
				class="relative h-full transform items-end transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
			>
				<div
					class="min-h-48 overflow-hidden rounded bg-white md:flex md:max-h-80"
					@click="goToEvent(event.slug)"
				>
					<div class="md:shrink-0">
						<img
							v-if="event.picture"
							class="h-56 w-full object-cover object-top sm:h-80 md:h-full md:w-48 lg:w-80"
							:src="switchBaseUrl(event.picture)"
							:alt="'Bild: ' + event.name.de"
						/>
						<div
							v-else
							class="bg-secondary flex h-48 w-full items-center justify-center object-cover p-2 text-white md:h-full md:w-48 lg:w-80"
						>
							<p class="text-lg font-bold text-background xl:text-xl">
								{{ event.name.de }}
							</p>
						</div>
					</div>
					<div class="p-8">
						<div
							v-if="event.subtitle"
							class="text-accent text-sm font-semibold uppercase tracking-wide"
						>
							{{ event.subtitle.de }}
						</div>
						<h4
							class="mt-1 block text-2xl font-medium leading-tight text-black"
						>
							{{ event.name.de }}
						</h4>
						<div class="mb-8 mt-2 line-clamp-3 text-gray-500">
							{{ event.desc.de }}
						</div>
						<!-- <div class="absolute bottom-4 right-4">
                            <UButton class="mt-2" color="primary" type="button" @click="goToEvent(event.slug)">
                                zum Stück
                                <Icon name="material-symbols:arrow-right-alt-rounded" aria-hidden="true"
                                    class="h-4 w-4" />
                            </UButton>
                        </div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// TODO: Remove this component

	// Get props
	const { event } = defineProps({
		event: {
			type: Object,
			required: true,
		},
	});
	// Import composables
	const { switchBaseUrl } = useAPIBaseUrl();
	// @ts-expect-error: navigateTo is not typed in this context
	const goToEvent = (slug) => navigateTo('/stuecke/' + slug);
</script>

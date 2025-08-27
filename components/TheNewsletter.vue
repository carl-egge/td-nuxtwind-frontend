<template>
	<section
		id="newsletter"
		class="relative isolate overflow-hidden bg-theme-accent py-16 sm:py-24 lg:py-32"
	>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2"
			>
				<div>
					<h3 class="text-3xl">Newsletter bestellen.</h3>
					<p class="mt-6 leading-7">
						Verpasse keines unserer kommenden Theaterstücke und bleibe immer
						informiert! Melde dich für unseren Newsletter an.
					</p>
					<UForm
						:schema="schema"
						:state="state"
						aria-label="Newsletter Abonnieren"
						class="mt-8 flex space-x-8"
						role="form"
						@submit="onSubmit"
					>
						<div class="flex-grow space-y-4">
							<UFormGroup label="Name" name="name" class="label-white" required>
								<UInput
									v-model="state.name"
									highlight
									placeholder="Dein Name"
									aria-label="Name"
									:ui="{ rounded: 'rounded-none' }"
									:disabled="waiting"
								/>
							</UFormGroup>
							<UFormGroup
								label="Email Adresse"
								name="email"
								class="label-white"
								required
							>
								<UInput
									v-model="state.email"
									type="email"
									placeholder="Deine Email-Adresse"
									aria-label="Email"
									:ui="{ rounded: 'rounded-none' }"
									:disabled="waiting"
								/>
							</UFormGroup>
						</div>
						<!-- <UButton
							type="submit"
							aria-label="Subscribe"
							:loading="waiting"
							class="bg-primary-600 hover:bg-primary-400 flex-none px-4"
						>
							Ahoi und Enter!
						</UButton> -->
						<UButton
							type="submit"
							aria-label="Abonnieren"
							:loading="waiting"
							variant="link"
							class="group inline-block h-32 w-32 -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105 md:h-40 md:w-40"
						>
							<svg
								viewBox="82 96 314 293"
								xmlns="http://www.w3.org/2000/svg"
								class="pointer-events-none h-full w-full drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
							>
								<path
									fill="#f51663"
									class="pointer-events-auto"
									d="M395.712,240 Q368.5593873417986,305.60819706018026 362.9980088455405,319.04602055443405 Q306.6236043716255,353.5373956448795 295.0770395998598,360.60189415738034 Q231.54048958776613,384.4612774860368 218.52697934432527,389.3481391316652 Q155.9583522768417,358.1656136442555 143.14309131121254,351.7788313155089 Q109.4718535422772,292.4941649471893 102.57533496309767,280.3515224380154 Q85.82579700063415,208.44988710065365 82.3951687432621,193.72304612794102 Q129.61592592324243,135.6634695746937 139.28764727335889,123.7717490758358 Q205.80172882881897,101.46686268394083 219.4250949305397,96.89839197716717 Q290.70952600611963,96.97538442874782 305.3099516481059,96.99115396702337 Q349.3054720253195,152.5774014614045 358.31660270498975,163.96253649037413 Q389.35478245984825,227.0736312033636 395.712,240 Z"
								/>
							</svg>
							<div
								class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-xl font-semibold uppercase text-background group-hover:text-theme-accent"
							>
								<span>Ahoi</span>
								<span class="flex items-start">
									<span class="text-4xl">&amp;</span>
									Enter
								</span>
							</div>
						</UButton>

						<!-- Accessible feedback -->
						<div role="alert" aria-live="assertive">
							<p v-if="errors" class="text-primary-400">
								🔥 Es gab ein Problem: {{ errors }}
								<br />
								Bitte versuchen Sie es erneut.
							</p>
							<p v-if="success" class="text-primary">{{ successMessage }}</p>
						</div>
					</UForm>
				</div>
				<dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
					<div class="flex flex-col items-start">
						<div class="bg-primary-600 ring-primary-600 p-2 ring-1">
							<Icon
								name="mdi:calendar-month"
								class="h-6 w-6 text-background"
								aria-hidden="true"
							/>
						</div>
						<dt class="mt-4 font-semibold uppercase">Regelmässige Updates</dt>
						<dd class="mt-2 font-light leading-7">
							Immer wenn etwas spannendes ansteht informieren wir dich.
						</dd>
					</div>
					<div class="flex flex-col items-start">
						<div class="bg-primary-600 ring-primary-600 p-2 ring-1">
							<Icon
								name="mdi:hand-back-left"
								class="h-6 w-6 text-background"
								aria-hidden="true"
							/>
						</div>
						<dt class="mt-4 font-semibold uppercase">Kein spam</dt>
						<dd class="mt-2 font-light leading-7">
							Wir schicken dir maximal einmal im Monat einen Newsletter.
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<!-- <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div> -->
	</section>
</template>

<script setup lang="ts">
	/**
	 * Newsletter
	 *
	 * This component lets user subscribe to the newsletter.
	 */
	import { ref } from 'vue';
	import { z } from 'zod';

	// Define the Zod schema for form validation
	const schema = z.object({
		name: z.string().min(1, { message: 'Name ist erforderlich' }),
		email: z.string().email({ message: 'Ungültige E-Mail-Adresse' }),
	});

	// Infer the TypeScript type from the schema and define the initial form state
	type Schema = z.infer<typeof schema>;
	const initialFormData: Schema = {
		name: '',
		email: '',
	};

	const state = ref<Schema>({ ...initialFormData });
	const errors = ref<string>('');
	const success = ref<boolean>(false);
	const successMessage = ref<string>('📩 Erfolgreich abonniert!');
	const waiting = ref<boolean>(false);

	async function onSubmit() {
		errors.value = '';
		success.value = false;
		waiting.value = true;

		const { forename, lastname } = useSplitName(state.value.name);

		try {
			const { data, error } = await useFetch('/api/subscribe', {
				method: 'POST',
				body: {
					forename: forename,
					lastname: lastname,
					email: state.value.email,
				},
			});

			// Set success message
			if (data.value && data.value.statusCode === 302) {
				successMessage.value = '😀 Du hast bereits abonniert!';
			} else if (data.value && data.value.statusCode === 200) {
				successMessage.value = '📩 Erfolgreich abonniert!';
			}

			if (error.value) {
				throw new Error(
					error.value.data?.statusMessage ||
						error.value.statusMessage ||
						'Serverfehler'
				);
			}

			success.value = true;
			// Reset the form after a successful subscription
			state.value = { ...initialFormData };
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.error('Error during subscription:', err);
			errors.value = err.message || 'Ein Fehler ist aufgetreten.';
		} finally {
			waiting.value = false;
		}
	}
</script>

<style>
	.label-white label {
		color: #0b0507 !important;
	}
	.label-white input {
		background: #faf2f5 !important;
	}
</style>

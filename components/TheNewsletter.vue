<template>
	<section
		id="newsletter"
		class="relative isolate overflow-hidden bg-primary py-16 text-background sm:py-24 lg:py-32"
	>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2"
			>
				<div>
					<h2 class="text-3xl">Unser Newsletter.</h2>
					<p class="mt-6 leading-7 text-background">
						Verpassen Sie keine unserer kommenden Theaterstücke und bleiben Sie
						immer informiert! Melden Sie sich für unseren Newsletter an.
					</p>
					<UForm
						:schema="schema"
						:state="state"
						aria-label="Newsletter Subscription"
						class="mt-8 space-y-4"
						role="form"
						@submit="onSubmit"
					>
						<UFormGroup label="Name" name="name" class="label-white" required>
							<UInput
								v-model="state.name"
								highlight
								placeholder="Dein Name"
								aria-label="Name"
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
								:disabled="waiting"
							/>
						</UFormGroup>
						<UButton
							type="submit"
							aria-label="Subscribe"
							:loading="waiting"
							class="flex-none bg-accent px-4"
						>
							Ahoi und Enter!
						</UButton>

						<!-- Accessible feedback -->
						<div role="alert" aria-live="assertive">
							<p v-if="errors" class="text-white">
								🔥 Es gab ein Problem: {{ errors }}
								<br />
								Bitte versuchen Sie es erneut.
							</p>
							<p v-if="success" class="text-white">{{ successMessage }}</p>
						</div>
					</UForm>
				</div>
				<dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
					<div class="flex flex-col items-start">
						<div class="rounded bg-accent p-2 ring-1 ring-accent">
							<Icon
								name="mdi:calendar-month"
								class="h-6 w-6 text-background"
								aria-hidden="true"
							/>
						</div>
						<dt class="mt-4 font-semibold uppercase">Regelmässige Updates</dt>
						<dd class="mt-2 leading-7">
							Immer wenn etwas spannendes ansteht informieren wir dich.
						</dd>
					</div>
					<div class="flex flex-col items-start">
						<div class="rounded bg-accent p-2 ring-1 ring-accent">
							<Icon
								name="mdi:hand-back-left"
								class="h-6 w-6 text-background"
								aria-hidden="true"
							/>
						</div>
						<dt class="mt-4 font-semibold uppercase">Kein spam</dt>
						<dd class="mt-2 leading-7">
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
		color: white !important;
	}
	.label-white input {
		background: rgb(241, 245, 249) !important;
	}
</style>

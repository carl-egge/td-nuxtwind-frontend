<template>
	<div>
		<!-- Page Hero -->
		<PageHero title="Kontakt" :background-image="`url(${heroimage})`" />

		<main class="flex items-center justify-center bg-background">
			<div
				class="border-primary-500 w-full max-w-3xl rounded-none border bg-background p-6 shadow-md"
			>
				<h3 class="mb-6">Kontaktiere Uns.</h3>

				<!-- Nuxt UI Form utilizing Zod Validation -->
				<UForm
					:schema="schema"
					:state="state"
					class="space-y-6"
					aria-label="Kontaktformular"
					role="form"
					@submit="onSubmit"
				>
					<UFormGroup label="Name" name="name">
						<UInput
							v-model="state.name"
							placeholder="Pippi Langstrumpf"
							aria-label="Name"
							:ui="{ rounded: 'rounded-none' }"
							:disabled="waiting"
						/>
					</UFormGroup>

					<UFormGroup label="Email" name="email">
						<UInput
							v-model="state.email"
							type="email"
							placeholder="villa@kunterbunt.de"
							aria-label="Email"
							:ui="{ rounded: 'rounded-none' }"
							:disabled="waiting"
						/>
					</UFormGroup>

					<UFormGroup label="Telefon (optional)" name="phone">
						<UInput
							v-model="state.phone"
							placeholder="0123 4567890"
							aria-label="Telefon"
							:ui="{ rounded: 'rounded-none' }"
							:disabled="waiting"
						/>
					</UFormGroup>

					<UFormGroup label="Nachricht" name="message">
						<UTextarea
							v-model="state.message"
							placeholder="Ich benötige Hilfe bei ..."
							aria-label="Nachricht"
							:ui="{ rounded: 'rounded-none' }"
							:disabled="waiting"
						/>
					</UFormGroup>

					<UFormGroup label="Kategorie" name="category">
						<USelect
							v-model="state.category"
							:options="categories"
							aria-label="Kategorie"
							:ui="{ rounded: 'rounded-none' }"
							:disabled="waiting"
							placeholder="Kategorie..."
						/>
					</UFormGroup>

					<UCheckbox
						v-model="newsletter"
						label="Gerne möchte ich in Zukunft den Theaterdeck-Newsletter empfangen und willige ein, dass meine E-Mail-Adresse zum Versand verwendet wird. Die Einwilligung kann ich jederzeit widerrufen."
						:ui="{ rounded: 'rounded-none' }"
					/>

					<!-- Captcha Field -->
					<!-- <ClientOnly> -->
					<UFormGroup
						label="Bitte bestätigen Sie, dass Sie kein Roboter sind"
						name="captcha"
					>
						<NuxtTurnstile
							ref="turnstile"
							v-model="turnstileToken"
							aria-label="Captcha"
							:options="{ theme: 'light' }"
							@error="onTurnstileError"
							@expired="onTurnstileExpired"
						/>
					</UFormGroup>
					<!-- </ClientOnly> -->

					<div>
						<i class="text-sm">
							Mit dem Absenden des Formulars erkläre ich mich mit der
							Verarbeitung meiner Daten gemäß der
							<ULink to="/datenschutz" class="underline">
								Datenschutzerklärung
							</ULink>
							&nbsp;einverstanden.
						</i>
					</div>

					<UButton
						type="submit"
						aria-label="Nachricht senden"
						:loading="waiting"
						:disabled="!isTurnstileValid || waiting"
						class="rounded-none py-2"
						block
					>
						Nachricht senden
					</UButton>

					<!-- Accessible feedback -->
					<div role="alert" aria-live="assertive">
						<p v-if="errors" class="text-accent">
							🔥 Es gab ein Problem.
							<br />
							{{ errors }}
							<br />
							Bitte versuchen Sie es erneut.
						</p>
						<p v-if="success" class="text-primary">
							📩 Ihre Nachricht wurde erfolgreich gesendet!
						</p>
					</div>
				</UForm>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	/**
	 * Contact Form
	 *
	 * This component demonstrates how to create a contact form with Nuxt UI and Zod validation.
	 * We also use Nuxt Mail to send an email with the form data.
	 * To avoid spam, we use Turnstile to prevent bots from submitting the form (nuxt-turnstile module).
	 */
	import { ref, computed } from 'vue';
	import { z } from 'zod';
	import type { FormSubmitEvent } from '#ui/types';
	import heroimage from '../assets/images/sw/kontakt.jpg';

	// Define categories and their corresponding recipient email addresses
	const categories = [
		{ label: 'Vermietung', value: 'vermietung@tdlogblog.de' },
		{ label: 'Kurse', value: 'kurse@tdlogblog.de' },
		{ label: 'Tickets', value: 'tickets@tdlogblog.de' },
		{ label: 'Allgemein', value: 'info@tdlogblog.de' },
	];

	// Define the Zod schema for form validation
	const schema = z.object({
		name: z.string().min(1, 'Name ist erforderlich'),
		email: z.string().email('Ungültige E-Mail-Adresse'),
		phone: z.string().optional(),
		message: z
			.string()
			.min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
		category: z.string().min(1, 'Kategorie ist erforderlich'),
	});

	// Infer TypeScript type from schema and initialize form state
	type Schema = z.infer<typeof schema>;
	const initialFormData: Schema = {
		name: '',
		email: '',
		phone: '',
		message: '',
		category: '',
	};
	const state = ref<Schema>({ ...initialFormData });

	// Turnstile token state and validity
	const turnstile = ref();
	const turnstileToken = ref('');
	const isTurnstileValid = computed(() => !!turnstileToken.value);

	// Submission states: errors holds error message, success and waiting are booleans
	const errors = ref('');
	const success = ref(false);
	const waiting = ref(false);

	// Checkmark to indicate if customer wants to join the newsletter
	const newsletter = ref(false);

	/**
	 * onSubmit handles form submission, including posting data to the API and error handling
	 * @param {FormSubmitEvent<Schema>} _event - The form submission event
	 * @returns {Promise<void>}
	 */
	async function onSubmit(_event: FormSubmitEvent<Schema>) {
		// Ensure Turnstile is valid before submission
		if (!isTurnstileValid.value) {
			errors.value = 'Bitte bestätigen Sie, dass Sie kein Roboter sind.';
			return;
		}
		waiting.value = true;
		errors.value = '';
		success.value = false;

		try {
			// Post form data and recipient email to the API
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { data, error: responseError } = await useFetch('/api/contact', {
				method: 'POST',
				body: {
					token: turnstileToken.value,
					name: state.value.name,
					email: state.value.email,
					phone: state.value.phone,
					message: state.value.message,
					recipient: state.value.category,
				},
			});
			// console.log('Form submission response:', data);
			// If the response has an status other than 2xx, throw an error
			if (responseError.value) {
				throw new Error(
					responseError.value.data?.statusMessage ||
						responseError.value.statusMessage ||
						'Serverfehler'
				);
			}

			// Handle Newsletter Checkmark
			if (newsletter.value) {
				const { forename, lastname } = useSplitName(state.value.name);
				const { error } = await useFetch('/api/subscribe', {
					method: 'POST',
					body: {
						forename: forename,
						lastname: lastname,
						email: state.value.email,
					},
				});
				// Check error on Newsletter check
				if (error.value) {
					throw new Error(
						error.value.data?.statusMessage ||
							error.value.statusMessage ||
							'Serverfehler'
					);
				}
			}

			// Set success
			success.value = true;
		} catch (error: unknown) {
			console.error('Error submitting form:', error);
			// Show error message from server if available, otherwise a fallback message
			// Use unknown with a type guard to retrieve the error message
			if (error instanceof Error) {
				errors.value = error.message;
			} else {
				errors.value =
					'Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.';
			}
		} finally {
			waiting.value = false;
			// Reset the form state including the optional phone field
			state.value = { ...initialFormData };
			newsletter.value = false;
			// Reset Turnstile after submission
			turnstile.value?.reset();
			turnstileToken.value = '';
		}
	}

	// Called when the Turnstile component encounters an error
	function onTurnstileError() {
		errors.value = 'Captcha Fehler. Bitte versuchen Sie es erneut.';
		console.error('Turnstile error occurred.');
	}

	// Called when the Turnstile token expires
	function onTurnstileExpired() {
		turnstileToken.value = '';
		console.warn('Turnstile token expired.');
	}
</script>

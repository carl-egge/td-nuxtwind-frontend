<template>
    <div>
        <!-- Page Hero -->
        <PageHero title="Kontakt" :breadcrumbs="[
            { label: 'HOME', to: '/' },
        ]" :backgroundImage="`url(${heroimage})`" />

        <main class="bg-background flex items-center justify-center">
            <div class="max-w-xl w-full p-6 bg-white rounded shadow-md my-10 mx-2">
                <h1 class="text-3xl text-primary mb-6">Kontaktieren Sie uns</h1>

                <!-- Nuxt UI Form utilizing Zod Validation -->
                <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                    <UFormGroup label="Name" name="name">
                        <UInput v-model="state.name" placeholder="Pippi Langstrumpf" />
                    </UFormGroup>

                    <UFormGroup label="Email" name="email">
                        <UInput v-model="state.email" type="email" placeholder="villa@kunterbunt.de" />
                    </UFormGroup>

                    <UFormGroup label="Nachricht" name="message">
                        <UTextarea v-model="state.message" placeholder="Ich benötige Hilfe bei ..." />
                    </UFormGroup>

                    <UButton type="submit" :loading="waiting">
                        Nachricht senden
                    </UButton>

                    <!-- Display error or success message -->
                    <p class="text-accent" v-if="errors">🔥 Etwas lief schief. Bitte versuche es erneut.</p>
                    <p class="text-primary" v-if="succsess">📩 Abgeschickt!</p>
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
 */
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

import heroimage from "../assets/images/hero-highkey-sr.jpg";

// Define the Zod schema
const schema = z.object({
    name: z.string().min(1, 'Name ist erforderlich'),
    email: z.string().email('Ungültige E-Mail-Adresse'),
    message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein')
});

// Infer the TypeScript type from the schema
type Schema = z.infer<typeof schema>

// Define the initial form data
const initialFormData: Schema = {
    name: '',
    email: '',
    message: ''
};

// Initialize the form state
const state = ref<Schema>({ ...initialFormData });

// State of submission
const errors = ref(false);
const succsess = ref(false);
const waiting = ref(false);

// Form submission handler
async function onSubmit(event: FormSubmitEvent<Schema>) {
    waiting.value = true;
    try {
        // TODO: Replace with your actual API call
        // await simulateApiCall(state.value);
        await sendMail(state.value);
        errors.value = false;
        succsess.value = true;
    } catch (error) {
        console.error('Error submitting form:', error);
        errors.value = true;
        succsess.value = false;
    } finally {
        waiting.value = false;
        state.value = { ...initialFormData };
    }
}

// Simulated API call (replace with your actual API call)
const simulateApiCall = (data: Schema): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('API call with data:', data.email, data.name, data.message);
            resolve();
        }, 1000);
    });
};

const sendMail = async (data: Schema) => {
    // Send email using nuxt-mail (config see nuxt config)
    const mail = useMail()
    try {
        await mail.send({
            from: data.email,
            subject: 'Message from Contact Form',
            text: `FROM: ${data.name} <${data.email}>\n\nMessage:\n${data.message}`,
        })
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Re-throw the error so it can be caught in onSubmit
    }
}
</script>
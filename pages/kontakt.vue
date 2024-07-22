<!-- pages/kontakt.vue -->
<template>
    <div>
        <!-- Page Hero -->
        <PageHero title="Kontakt" :breadcrumbs="[
            { label: 'HOME', to: '/' },
        ]" :backgroundImage="`url(${heroimage})`" />

        <main class="bg-background flex items-center justify-center">
            <div class="max-w-xl w-full p-6 bg-white rounded shadow-md my-10 mx-2">
                <h1 class="text-3xl font-bold text-primary mb-6">Kontaktieren Sie uns</h1>
                <UForm @submit="onSubmit">
                    <UFormGroup label="Name" name="name">
                        <UInput v-model="form.name" placeholder="Ihr Name" />
                    </UFormGroup>
                    <UFormGroup label="E-Mail" name="email">
                        <UInput v-model="form.email" type="email" placeholder="ihre@email.de" />
                    </UFormGroup>
                    <UFormGroup label="Nachricht" name="message">
                        <UTextarea v-model="form.message" placeholder="Ihre Nachricht" rows="4" />
                    </UFormGroup>
                    <UButton type="submit" color="primary" class="text-base mt-4" block>
                        Nachricht senden
                    </UButton>
                </UForm>
            </div>
        </main>
    </div>
</template>

<script setup>
// import { z } from 'zod'

import heroimage from "../assets/images/hero-highkey-sr.jpg";

const form = ref({
    name: '',
    email: '',
    message: ''
})

// const formSchema = z.object({
//     name: z.string().min(1, 'Name ist erforderlich'),
//     email: z.string().email('Ungültige E-Mail-Adresse'),
//     message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein')
// })

const onSubmit = (data) => {
    // Hier können Sie die Logik zum Senden der Nachricht implementieren
    console.log('Formular gesendet:', data)
    // Zurücksetzen des Formulars nach dem Absenden
    form.value = { name: '', email: '', message: '' }
}
</script>
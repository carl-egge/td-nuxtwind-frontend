<template>
    <div class="isolate px-6 py-24 sm:py-32 lg:px-8">
        <!-- <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true">
            <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div> -->
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kontaktiere Uns</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">
                Du hast Fragen zu unserem Programm oder unseren Kursen?
                Schreib uns einfach eine Nachricht und wir melden uns bei dir.
            </p>
        </div>
        <form action="#" method="POST" class="mx-auto mt-12 max-w-xl sm:mt-14">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Vorname</label>
                    <div class="mt-2.5">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-td-accent sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Nachname</label>
                    <div class="mt-2.5">
                        <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-td-accent sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <!-- <div class="sm:col-span-2">
                    <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                    <div class="mt-2.5">
                        <input type="text" name="company" id="company" autocomplete="organization"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-td-accent sm:text-sm sm:leading-6" />
                    </div>
                </div> -->
                <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                    <div class="mt-2.5">
                        <input type="email" name="email" id="email" autocomplete="email"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-td-accent sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <!-- <div class="sm:col-span-2">
                    <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone
                        number</label>
                    <div class="relative mt-2.5">
                        <div class="absolute inset-y-0 left-0 flex items-center">
                            <label for="country" class="sr-only">Country</label>
                            <select id="country" name="country"
                                class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-td-accent sm:text-sm">
                                <option>US</option>
                                <option>CA</option>
                                <option>EU</option>
                            </select>
                            <ChevronDownIcon class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" aria-hidden="true" />
                            <Icon name="mingcute:lighthouse-line" class="text-xl mb-4" />
                        </div>
                        <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                            class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-td-accent sm:text-sm sm:leading-6" />
                    </div>
                </div> -->
                <div class="sm:col-span-2">
                    <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Nachricht</label>
                    <div class="mt-2.5">
                        <textarea name="message" id="message" rows="4"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-td-accent sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
                    <div class="flex h-6 items-center">
                        <Switch v-model="agreed"
                            :class="[agreed ? 'bg-td-accent' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-td-accent']">
                            <span class="sr-only">Agree to policies</span>
                            <span aria-hidden="true"
                                :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
                        </Switch>
                    </div>
                    <SwitchLabel class="text-sm leading-6 text-gray-600">
                        Ich bestätige, dass ich mit der
                        {{ ' ' }}
                        <NuxtLink to="/datenschutz" class="font-semibold text-td-accent">Datenschutzerklärung
                        </NuxtLink> des
                        Theaterdeck
                        einverstanden bin.
                    </SwitchLabel>
                </SwitchGroup>
            </div>
            <div class="mt-10">
                <button type="submit" @click="handleSubmit" :disabled="!agreed"
                    class="block w-full rounded-md bg-td-accent px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-td-accent/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-td-accent-400">
                    Abschicken
                </button>
            </div>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const agreed = ref(false)
const handleSubmit = () => {
    alert('Form submitted!')
}
</script>
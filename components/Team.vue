<template>
    <section class="bg-white py-24">
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Unser Team</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">Unser engagiertes Team besteht aus leidenschaftlichen
                    Theaterpädagogen, die mit Herzblut Theaterkurse leiten und die kreativen Talente Ihrer Kinder fördern.
                    Lernen Sie unser Team kennen und entdecken Sie die inspirierende Welt des Theaters mit uns!</p>
            </div>
            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li v-for="person in people" :key="person.name">
                    <div class="flex items-center gap-x-6">
                        <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
                        <div>
                            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}
                            </h3>
                            <p class="text-sm font-semibold leading-6 text-td-primary-400">{{ person.role }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
  
<script setup>
const people = [
    {
        name: 'Niklas Heinecke',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Anne',
        role: 'Theater Performance',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Marietta',
        role: 'Kindertheater',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lena',
        role: 'Kursleiterin',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Thorsten',
        role: 'Kursleiter',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Enrico',
        role: 'Improtheater',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
</script>
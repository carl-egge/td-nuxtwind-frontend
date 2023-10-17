<template>
    <div class="top-0 absolute z-10 bg-black text-td-accent-300 w-full sm:h-[60vh] h-[80vh]" :style="'background-image: url(' + background +
        '); background-repeat: no-repeat; background-size: cover; background-position: center center;'">

        <div class="pb-8 flex flex-col h-full items-center justify-center bg-gradient-to-b from-td-primary-500/90 to-td-primary-500/30 min-h-[75vh] sm:min-h-[55vh] lg:min-h-[55vh]"
            aria-hidden="true">

            <div class="relative isolate px-6 pt-8 pb-6 lg:px-8">
                <!-- <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                                class="absolute inset-0" aria-hidden="true" />Read more <span
                                aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
            </div> -->
                <div class="mt-32">
                    <div class="font-mono">
                        <blockquote class="text-3xl md:text-4xl leading-8 text-center">
                            Es wird immer Jemanden geben der die
                            Hoffnung nicht aufgibt.
                        </blockquote>
                        <cite class="leading-10 font-bold text-white uppercase font-sans text-xs sm:text-base">
                            ~ Die Unendliche Geschichte
                        </cite>
                    </div>
                    <!-- <img class="mx-auto h-4/5 w-auto" src="~/assets/images/logo-theaterdeck-hamburg-white.png"
                        alt="Theaterdeck" />
                    <div class="font-mono">
                        <p class="mt-6 text-xl leading-8 text-white">
                            Der Sturm wird stärker.<br />Das macht nichts,ich auch!
                        </p>
                        <p class="text-sm text-white">
                            ~ Astrid Lindgren <span class="uppercase">Pippi Langstrumpf</span>
                        </p>
                    </div> -->
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <!-- <a href="#"
                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                        started</a> -->
                        <NuxtLink to="/stuecke">
                            <button class="td-btn-primary">
                                Spielplan
                            </button>
                        </NuxtLink>
                        <a href="#newsletter"
                            class="text-sm font-semibold leading-6 text-white border-2 rounded border-white p-2 hover:border-td-accent-100 hover:text-td-accent-100">
                            Newsletter <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <!-- <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//@ts-ignore
import background from "../assets/images/hero-letters-shadow.jpg";

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Special+Elite');

blockquote {
    font-family: 'Special Elite', cursive;
    font-weight: 100;
    max-width: 600px;
    line-height: 1.4;
    position: relative;
    padding: .5rem;
}

blockquote:before,
blockquote:after {
    position: absolute;
    color: #f1efe6;
    font-size: 8rem;
    width: 4rem;
    height: 4rem;
}

blockquote:before {
    content: '“';
    left: -5rem;
    top: -2rem;
}

blockquote:after {
    content: '”';
    right: -4rem;
    bottom: 1rem;
}

@media screen and (max-width: 768px) {
    blockquote:before {
        content: '“';
        left: -1rem;
        top: -3.5rem;
    }

    blockquote:after {
        content: '”';
        right: -1rem;
        bottom: 1rem;
    }
}
</style>
<template>
    <article class="px-6 mt-16 md:mt-24 xl:mt-32 md:px-16 xl:px-24">
        <h1 class="text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">
            Things I'm working on.
        </h1>
        <!-- <p class="mt-1 text-gray-300 text-md">Stuff I'm working on now</p> -->
        <section class="mt-16 border rounded-lg shadow-sm border-gray-125 dark:border-gray-900">
            <div class="relative">
                <div class="absolute inset-0 rounded-t-lg opacity-40 bg-gradient-to-b from-white to-transparent"></div>
                <span
                    class="absolute flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full dark:bg-gray-800 bg-opacity-80 md:w-32 md:h-32 xl:w-40 xl:h-40 md:right-10 md:-top-20 right-6 -top-12">
                    <span
                        class="flex items-center justify-center w-20 h-20 text-6xl font-bold bg-gray-100 border-4 rounded-full border-gray-125 dark:border-gray-700 dark:bg-gray-800 md:w-28 md:h-28 xl:w-36 xl:h-36">
                        <span class="text-4xl font-bold text-gray-500 dark:text-gray-100 xl:font-black">1</span>
                    </span>
                </span>
                <h2 class="absolute font-mono text-2xl text-gray-800 sm:text-3xl md:text-4xl xl:text-5xl top-3 left-4 sm:top-4 sm:left-8 md:top-8 md:left-10 xl:top-16 xl:left-20">alamodal.dev</h2>
                <img class="object-cover w-full max-w-full rounded-t-lg max-h-96" src="/img/projects/brownie-a-la-mode.webp" alt="">
            </div>
            <div class="overflow-hidden rounded-b-lg">
                <div class="pt-8 pb-4">
                    <div class="relative mx-8 text-xs tracking-wide uppercase">
                        <span class="absolute h-1 bg-gray-150 dark:bg-gray-850 inset-x-4 top-3.5"></span>
                        <div class="absolute h-1 inset-x-6 top-3.5">
                            <span class="absolute top-0 left-0 w-1/3 h-full bg-brand-primary"></span>
                            <span class="absolute top-0 w-24 h-full bg-gradient-to-r from-brand-primary to transparent left-1/3"></span>
                        </div>
                        <div class="relative flex justify-between">
                            <div class="flex flex-col items-center">
                                <span
                                    class="flex items-center justify-center w-8 h-8 bg-gray-100 border-2 rounded-full dark:bg-gray-800 border-brand-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand-primary" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span class="mt-4">Planning</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <span
                                    class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-brand-primary" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span class="mt-4">Design</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="w-8 h-8 rounded-full bg-gray-150 dark:bg-gray-850"></span>
                                <span class="mt-4">Dev<span class="hidden md:inline">elopment</span></span>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="w-8 h-8 rounded-full bg-gray-150 dark:bg-gray-850"></span>
                                <span class="mt-4">Launch</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-64 p-8 bg-gray-50 dark:bg-gray-825">
                    <p class="flex items-baseline">
                        <span class="font-serif text-3xl italic">à la mode</span>
                        <span class="ml-3 text-xs uppercase">adjective</span>
                    </p>
                    <p class="mt-2 text-xl font-light">\ ä-lə-ˈmōd \</p>
                    <ol class="mt-4 list-decimal list-inside ">
                        <li>: FASHIONABLE</li>
                        <li>: topped with ice cream</li>
                    </ol>
                </div>
            </div>
        </section>
    </article>
</template>

<!-- <div
                class="relative min-h-screen mt-8">
                <div class="absolute flex flex-col items-center -translate-x-1/2 left-1/2 top-64">
                    <svg class="w-16 h-16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="13.5" stroke="#F9FAFB" />
                        <circle cx="16" cy="16" r="5" fill="#F9FAFB" />
                        <path
                            d="M27 16C27 17.4445 26.7155 18.8749 26.1627 20.2095C25.6099 21.5441 24.7996 22.7567 23.7782 23.7782C22.7567 24.7996 21.5441 25.6099 20.2095 26.1627C18.8749 26.7155 17.4445 27 16 27C14.5555 27 13.1251 26.7155 11.7905 26.1627C10.4559 25.6099 9.24327 24.7996 8.22182 23.7782C7.20038 22.7567 6.39013 21.5441 5.83732 20.2095C5.28452 18.8749 5 17.4445 5 16H9.10788C9.10788 16.9051 9.28615 17.8013 9.63252 18.6375C9.97888 19.4737 10.4865 20.2335 11.1265 20.8735C11.7665 21.5135 12.5263 22.0211 13.3625 22.3675C14.1987 22.7138 15.0949 22.8921 16 22.8921C16.9051 22.8921 17.8013 22.7138 18.6375 22.3675C19.4737 22.0211 20.2335 21.5135 20.8735 20.8735C21.5135 20.2335 22.0211 19.4737 22.3675 18.6375C22.7138 17.8013 22.8921 16.9051 22.8921 16H27Z"
                            fill="#F9FAFB" />
                    </svg>
                    <svg class="w-64 mt-4" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
                        viewBox="0 0 544 45">
                        <path
                            d="M6929.46 1024.34h-11.52v22.39h3.42v-9.79h6.37v-3.2h-6.37v-6.27h8.1v-3.13Zm26.86 19.22h-8.1v-19.22h-3.38v22.39h11.48v-3.17Zm15.37-19.22h3.381v22.388h-3.381zm35.03 6.44c0-4.96-2.7-6.76-7.53-6.76-4.46 0-7.59 1.54-7.59 6.76v9.47c0 4.93 2.88 6.84 7.59 6.84 4.11 0 7.53-1.48 7.53-6.84v-5.29h-7.53v3.13h4.11v1.01c0 2.7-1.26 4.5-3.92 4.5h-.44c-2.52 0-3.89-1.58-3.89-4.5v-7.13c0-1.44.29-2.41.83-3.17.65-.86 1.66-1.33 3.06-1.33h.44c2.15 0 3.92.9 3.92 3.6v.11h3.42v-.4Zm30.42-6.44h-3.38v9.36h-7.21v-9.36h-3.38v22.39h3.38v-9.9h7.21v9.9h3.38v-22.39Zm29.66 0h-14.29v3.13h5.43v19.26h3.43v-19.26h5.43v-3.13Zm50.69 5.79c0-3.45-1.8-5.79-5.76-5.79h-7.09v22.39h3.38v-6.3h3.71c3.53 0 5.76-2.2 5.76-5.76v-4.54Zm-4.61-1.8c1.08.69 1.23 1.98 1.23 2.88v2.38c0 1.37-.51 2.34-1.44 2.88-.87.54-2.02.61-2.92.61h-1.73v-9.29h1.73c1.44 0 2.41.11 3.13.54Zm31.46 15.23h-8.1v-19.22h-3.38v22.39h11.48v-3.17Zm26.32 3.17h3.35l-6.01-22.39h-3.85l-5.98 22.39h3.35l1.4-5.26h6.3l1.44 5.26Zm-4.64-17.03 2.45 8.68h-4.72l2.27-8.68Zm36.72-5.36h-3.42v14.36l-6.2-14.36h-3.67v22.39h3.39v-14.51l6.48 14.51h3.42v-22.39Z"
                            style="fill:#fff;fill-rule:nonzero"
                            transform="translate(-13198.04 -1953.617) scale(1.9078)" />
                    </svg>
                    <p class="px-16 mt-8 text-lg text-center font-mediumw full xl:w-3/4">Manage your design tokens,
                        generate your styleguide, and build your component library. All in one place.</p>
                </div>
                <img class="mx-auto max-w-screen" src="/public/img/planet-isolated.webp" alt="">
                <img class="absolute w-[3vw] h-auto -translate-x-1/2 -translate-y-1/2 left-1/2 top-4/5 "
                    src="/public/img/rocket-isolated.webp" alt="">
            </div>
            <div class="h-[512px] full-bleed bg-gradient-to-b from-gray-900 to-gray-800"></div> -->
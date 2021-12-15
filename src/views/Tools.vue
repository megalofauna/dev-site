<template>
  <article class="px-8 mt-16 md:mt-24 xl:mt-32 md:px-16 xl:px-24">

    <h1 class="text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">
      Tools I like<br class="inline sm:hidden"> to use.
    </h1>
    <div class="grid grid-cols-12 gap-4 mt-16 place-items-stretch">
      <div v-for="(tool, i) in tools" v-bind:key="i"
        class="relative flex flex-col items-center col-span-12 pt-12 overflow-hidden bg-white bg-opacity-75 border rounded-lg shadow-sm border-gray-125 dark:border-gray-900 lg:col-span-6 hd:col-span-4 dark:bg-gray-825">
        <span
          class="flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full dark:bg-transparent md:w-28 md:h-28 xl:w-32 xl:h-32">
          <img class="w-3/4 h-3/4 xl:w-full xl:h-full" :src="tool.iconPath" alt="Tool logo">
        </span>
        <h3 class="mt-6 text-4xl font-extrabold text-gray-600 dark:text-white sm:text-5xl xl:text-7xl">
          <a :class="tool.hoverColor" class="transition-colors duration-300 ease" :href="tool.url">{{ tool.name }}</a>
        </h3>
        <hr class="w-16 mx-auto my-4">
        <p
          class="w-1/3 mx-auto mt-2 mb-16 text-sm text-center text-gray-500 lg:w-1/2 xl:leading-tight dark:text-gray-300 md:text-base xl:text-lg">
          {{ tool.description }}
        </p>
        <div class="w-full p-8 mt-auto bg-opacity-25 bg-gray-125 dark:bg-gray-850">
          <p class="leading-snug text-gray-500 text-md md:text-lg xl:text-lg dark:text-gray-200">{{tool.commentary}}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        pageCurrentRoute: window.location.pathname,
        tools: [
          {
            name: "Alpine.js",
            url: 'https://alpinejs.dev/',
            hoverColor: 'hover:text-[#77C1D2]',
            iconPath: "./img/tools/alpine-js.svg",
            description: "Lightweight, powerful reactive JavaScript library",
            commentary: "When the DOM needs some reactivity, but a full-fledged JavaScript framework is too much overhead, I reach for Alpine. Works every time.",
          },
          {
            name: "Vue.js",
            hoverColor: 'hover:text-emerald-400',
            url: 'https://vuejs.org/',
            iconPath: "./img/tools/vue-js.svg",
            description: "Progressive JS framework—tiny core, big ecosystem",
            commentary: "Sprinkle on top of existing projects or build a fully-scalable project from scratch. Vue’s got you.",
          },
          {
            name: "TailwindCSS",
            url: 'https://tailwindcss.com/',
            hoverColor: 'hover:text-[#06b6d4]',
            iconPath: "./img/tools/tailwind-css.svg",
            description: "A utility-first CSS framework",
            commentary: "Love it or hate it: functional CSS always makes an impression. I ❤ it. And I dunno know what you heard, but it scales.",
          },
          {
            name: "Vite.js",
            url: 'https://vitejs.dev/',
            hoverColor: 'hover:text-[#FFC018]',
            iconPath: "./img/tools/vite-js.svg",
            description: "Next-generation frontend tooling",
            commentary: "Bye-bye, slow server startups and distracting update delays. This thing’s built on native ESM.",
          },
          {
            name: "Eleventy.js",
            url: 'https://www.11ty.dev/',
            hoverColor: 'hover:text-red-400',
            iconPath: "./img/tools/11ty-js.svg",
            description: "A simpler static site generator",
            commentary: "11ty is  perfect for standing up a static site quickly with no fuss. A really adaptable base that just works out of the box.",
          },
        ],
      };
    },
  };
</script>
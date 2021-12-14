<script setup>
  import { ref } from 'vue'
  import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <header class="px-6 py-6 mx-auto md:py-10 xl:py-12 md:px-16 xl:px-24 max-w-screen-hd">
    <div class="flex items-center justify-between w-full mx-auto">
      <a href="/" class="font-mono text-lg font-thin hover:underline hover:text-blue-500">http://chrissalmon.dev</a>
      <nav
        class="fixed bottom-0 left-0 z-50 w-full py-3 bg-gray-100 border-t border-gray-200 lg:border-none backdrop-blur-xl bg-opacity-70 dark:bg-opacity-80 dark:border-black dark:bg-gray-800 lg:bottom-auto lg:w-auto lg:left-auto lg:relative lg:z-auto lg:flex lg:justify-between">
        <ul class="flex items-center justify-center space-x-16 text-xs">
          <li>
            <a href="/projects" class="flex flex-col items-center group dark:group hover:text-blue-500">
              <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A.998.998 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432l9 6zm8.12-7.078L12 19.798V4.667l7.565 10.087z">
                </path>
              </svg>
              <span class="mt-1 font-medium tracking-tight uppercase lg:mt-2 group-hover:text-gray-600 dark:group-hover:text-gray-50">Projects</span>
            </a>
          </li>
          <li>
            <a href="/tools" class="flex flex-col items-center group dark:group hover:text-blue-500">
              <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm-1 16v-5H7l6-7v5h4l-6 7Z" />
              </svg>
              <span class="mt-1 font-medium tracking-tight uppercase lg:mt-2 group-hover:text-gray-600 dark:group-hover:text-gray-50">Tools</span>
            </a>
          </li>
          <li>
            <a href="/resume" class="flex flex-col items-center group dark:group hover:text-blue-500">
              <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12zM13 4l5 5h-5V4zM7 8h3v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z">
                </path>
              </svg>
              <span class="mt-1 font-medium tracking-tight uppercase lg:mt-2 group-hover:text-gray-600 dark:group-hover:text-gray-50">Resume</span>
            </a>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  </header>
  <main class="w-full mx-auto mb-32 max-w-screen-hd">
    <router-view />
  </main>
</template>
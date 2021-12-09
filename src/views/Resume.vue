<template>

    <article class="px-8 mt-16 md:mt-24 xl:mt-32 md:px-16 xl:px-24">
        <h1 class="text-5xl font-black leading-none md:text-6xl xl:text-8xl">
            Resume
          </h1>
        <!-- <header class="flex items-center">
            <h1 class="m-0 text-base tracking-widest uppercase font-400">{{ $route.meta.title }}</h1>
            <hr class="flex-grow my-0 ml-6 mr-6 border-t border-red-500">
            <div class="flex space-x-4">
                <button type="button" class="relative flex items-center px-2 py-1 text-red-500 bg-red-100 rounded hover:text-white hover:bg-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
                      </svg>
                </button>
                <button type="button" class="relative flex items-center px-2 py-1 text-red-500 bg-red-100 rounded hover:text-white hover:bg-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd" />
                      </svg>
                </button>
            </div>
        </header> -->


        <!-- <p class="mt-24 text-xl font-bold md:text-2xl xl:text-4xl">Chris Salmon</p>
        <p class="text-xl font-semibold text-gray-600 xl:text-3xl 2xl:text-5xl 2xl:leading-tight">
            A <span class="font-bold text-red-400">design-obsessed front-end developer</span> with 8 years’ experience,
            I am especially interested in crafting accessible, performant, and well-constructed products defined by
            design systems and built with pattern
            libraries. I thrive at the intersection of <span class="font-bold text-red-400">user-focused design</span>
            and <span class="font-bold text-red-400">reusable, inclusive code</span>.
        </p> -->

        <section class="p-8 mt-16 bg-gray-100 border-t-4 border-red-400 md:p-8 xl:p-16 dark:bg-gray-800 dark:bg-opacity-20">
            <h2 class="flex items-center m-0 text-2xl font-medium dark:text-white md:text-3xl xl:text-5xl">
                Languages & technologies
            </h2>
            <ul class="max-w-5xl mt-8 space-y-2 list-inside xl:space-y-3 list-square xl:text-xl">
                <li><strong>Languages:</strong> HTML / CSS (Sass, PostCSS) / JavaScript|TypeScript</li>
                <li><strong>Technologies:</strong> Vue (and ecosystem), Vite, Alpine, TailwindCSS, amCharts, Eleventy
                    (SSG)</li>
                <li><strong>Working knowledge:</strong> React</li>
            </ul>
        </section>

        <section class="p-8 mt-16 bg-gray-100 border-t-4 border-red-400 md:p-8 xl:p-16 dark:bg-gray-800 dark:bg-opacity-20">
            <h2 class="flex items-center m-0 text-2xl font-medium dark:text-white md:text-3xl xl:text-5xl">Work experience</h2>
            <div class="flex flex-wrap items-center justify-between mt-16">
                <h3 class="w-full m-0 text-lg font-bold leading-tight md:text-2xl dark:text-gray-50 sm:w-auto">Software Developer II - Assistant Vice
                    President</h3>
                <p class="px-2 py-1 mt-1 text-sm text-gray-100 bg-gray-600 rounded">Nov 2021 – present</p>
            </div>
            <p class="mt-2 font-medium text-gray-600 uppercase dark:text-gray-200">Bank of Oklahoma</p>
            <ul class="max-w-5xl mt-8 space-y-2 list-inside xl:space-y-3 list-square xl:text-xl">
                <li>Lead for org-wide evaluation and revamp of front-end development practices</li>
                <li>Duties as below</li>
            </ul>
            <div
                class="flex flex-wrap items-center justify-between pt-8 mt-8 border-t border-gray-300 dark:text-gray-100">
                <h3 class="w-full m-0 text-lg font-bold leading-tight md:text-2xl dark:text-gray-50 sm:w-auto">Software Developer II</h3>
                <p class="px-2 py-1 mt-1 text-sm text-gray-100 bg-gray-600 rounded">Nov 2021 – present</p>
            </div>
            <p class="mt-2 font-medium text-gray-600 uppercase dark:text-gray-200">Bank of Oklahoma</p>
            <ul class="max-w-5xl mt-8 space-y-2 list-inside xl:space-y-3 list-square xl:text-xl">
                <li>Precisely code out responsive, accessible UIs using semantic HTML and algorithmic CSS</li>
                <li>Plan, design, and construct new pages/layouts based on expert familiarity with design system</li>
                <li>Plan and build out reusable components that consume diverse types of data</li>
                <li>Create domain-specific language to consume data passed to templates</li>
                <li>Adhere rigidly to design system specs while advising designers as to potential UX issues</li>
                <li>Contribute to design system specifications (e.g., led the adoption of a 4/8pt spatial system)</li>
            </ul>

            <div class="flex flex-wrap items-center justify-between pt-8 mt-8 border-t border-gray-300">
                <h3 class="w-full m-0 text-lg font-bold leading-tight md:text-2xl dark:text-gray-50 sm:w-auto">UI/UX Designer</h3>
                <p class="px-2 py-1 mt-1 text-sm text-gray-100 bg-gray-600 rounded">April 2017 — May 2018</p>
            </div>
            <p class="mt-2 font-medium text-gray-600 uppercase dark:text-gray-200">NORDAM/PartPilot</p>
            <ul class="max-w-5xl mt-8 space-y-2 list-inside xl:space-y-3 list-square xl:text-xl">
                <li>Research, plan, and design user-centered, accessible features with an eye toward implementation in
                    efficient code</li>
                <li>Build out static code prototypes for complex features</li>
                <li>Consult with developers to implement front end features utilizing HTML and CSS best practices</li>
                <li>Serve as resident CSS mentor for the development team and help with front end development tasks</li>
                <li>Monitor user interaction recordings and assess implications for future design and development
                    strategies
                </li>
            </ul>

            <div class="flex flex-wrap items-center justify-between pt-8 mt-8 border-t border-gray-300">
                <h3 class="w-full m-0 text-lg font-bold leading-tight md:text-2xl dark:text-gray-50 sm:w-auto">Front-end Developer</h3>
                <p class="px-2 py-1 mt-1 text-sm text-gray-100 bg-gray-600 rounded">Mar 2016 — April 2017</p>
            </div>
            <p class="mt-2 font-medium text-gray-600 uppercase dark:text-gray-200">PennWell Publishing</p>
            <ul class="max-w-5xl mt-8 space-y-2 list-inside xl:space-y-3 list-square xl:text-xl">
                <li>Developed new features in close collaboration with design team</li>
                <li>Developed plan to reduce CSS code bloat by 75%</li>
                <li>Performed cross-browser/cross-device quality assurance testing for web features</li>
            </ul>

            <div class="flex flex-wrap items-center justify-between pt-8 mt-8 border-t border-gray-300">
                <h3 class="w-full m-0 text-lg font-bold leading-tight md:text-2xl dark:text-gray-50 sm:w-auto">Front-end Developer/Designer</h3>
                <p class="px-2 py-1 mt-1 text-sm text-gray-100 bg-gray-600 rounded">June 2015 — Mar 2016</p>
            </div>
            <p class="mt-2 font-medium text-gray-600 uppercase dark:text-gray-200">Brief Media</p>
            <ul class="max-w-5xl mt-8 space-y-2 list-inside xl:space-y-3 list-square xl:text-xl">
                <li>Developed reusable PostCSS generators to generate styles for various layout scenarios</li>
                <li>Spearheaded CSS refactor of one of our web properties, veterinaryteambrief.com, eliminating
                    unnecessary
                    code and implementing a grid system custom-built with PostCSS rule generators</li>
                <li>Performed cross-browser/cross-device quality assurance testing for web features</li>
                <li>Team Lead for all digital editions’ templates and monthly layouts</li>
                <li>Planned, sketched, created high-fidelity comps for, and coded new interactive quiz feature for
                    cliniciansbrief.com; this popular feature, integrated with Facebook, measurably increased our user
                    engagement</li>
            </ul>

            <div
                class="flex flex-wrap items-center justify-between pt-8 mt-8 border-t border-gray-300 dark:text-gray-100">
                <h3 class="w-full m-0 text-lg font-bold leading-tight md:text-2xl dark:text-gray-50 sm:w-auto">Front-end Developer</h3>
                <p class="px-2 py-1 mt-1 text-sm text-gray-100 bg-gray-600 rounded">April 2013 — June 2015</p>
            </div>
            <p class="mt-2 font-medium text-gray-600 uppercase dark:text-gray-200">American Association of Petroleum Geologists</p>
            <ul class="max-w-5xl mt-8 space-y-2 list-inside xl:space-y-3 list-square xl:text-xl">
                <li>Project lead for redesign and implementation of responsive website for URTEC (Unconventional
                    Resources
                    Technology Conference)</li>
                <li>Redesigned and coordinated the development and deployment of responsive, mobile-first website for
                    the
                    2015 Arctic Technology Conference by consulting with graphic design, convention, and IT departments
                </li>
                <li>Performed design and development tasks as required</li>
            </ul>
        </section>
        <section class="p-8 mt-16 bg-gray-100 border-t-4 border-red-400 md:p-8 xl:p-16 dark:bg-gray-800 dark:bg-opacity-20">
            <h2 class="flex items-center m-0 text-2xl font-medium dark:text-white md:text-3xl xl:text-5xl">Education</h2>
            <ul class="max-w-5xl mt-8 space-y-2 list-inside xl:space-y-3 list-square xl:text-xl">
                <li>Undergraduate: BA in English (major) and History (minor) | Austin Peay (with honors)</li>
                <li>Masters: MA in Theology (emphasis in Philosophy) | New Orleans Baptist Theological Seminary (with
                    honors)</li>
            </ul>
        </section>
    </article>
</template>
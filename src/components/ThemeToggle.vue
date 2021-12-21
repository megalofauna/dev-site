<template>
	<div class="flex items-center justify-end w-48 space-x-2">
		<button id="theme-toggle" type="button" @click="toggleTheme()" role="switch"
			class="relative w-10 h-6 overflow-hidden rounded-full outline-none focus:ring-2 ring-brand-primary">
			<span class="absolute inset-0 flex items-center"
				:class="theme === 'dark' ? 'bg-brand-primary' : 'bg-gray-200'">
				<span aria-hidden="true" class="w-4 h-4 transition-all rounded-full shadow-inner"
					:class="theme === 'dark' ? 'translate-x-5 bg-white' : 'translate-x-[4px] bg-gray-400'"></span>
			</span>
		</button>
		<label for="theme-toggle" class="text-sm font-bold tracking-wide uppercase xl:text-md">Dark</label>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				theme: localStorage.getItem("theme")
			};
		},
		methods: {
			toggleTheme() {
				if (this.theme === "dark") {
					this.theme = "light"
					document.documentElement.classList.remove('dark')
					localStorage.setItem("theme", "light")
				} else {
					this.theme = "dark"
					document.documentElement.classList.add('dark')
					localStorage.setItem("theme", "dark");
				}
			}
		}
	};
</script>
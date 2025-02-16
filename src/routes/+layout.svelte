<script lang="ts">
	import '../app.css';
	import checks from '$lib/assets/checks.png';
	let { children } = $props();
</script>

<div class="h-screen w-screen p-8 md:p-8 bg-repeat bg-[150px_auto] bg-opacity-0" style="background-image: url('{checks}');">
	<div class="h-full w-full overflow-hidden rounded-2xl">
		{@render children()}
	</div>
	<nav class="h-[2rem] w-[100vh] fixed bottom-0 right-[2rem] bg-white flex justify-center rotate-90 origin-bottom-right md:shadow-xl">
		<!-- rotate text by 90 deg -->
		<a href="/home" class="mx-4 cursor-pointer">Home</a>
		<a href="/about" class="mx-4 cursor-pointer">About</a>
		<a href="/projects" class="mx-4 cursor-pointer">Projects</a>
		<a href="/contact" class="mx-4 cursor-pointer">Contact</a>
	</nav>
</div>

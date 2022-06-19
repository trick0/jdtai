<script>
	import SvelteMarkdown from 'svelte-markdown';
	import pages from '../assets/pages.json';
</script>

<main class="w-full h-full">
	{#each pages as page}
		<div class="page h-full p-8" id={page.title} style="background-color: {page.background}; color: {page.color}">
			<SvelteMarkdown source={page.content} />
		</div>
	{/each}
</main>

<style>
	main {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	}

	.page {
		scroll-snap-align: start;
	}
</style>

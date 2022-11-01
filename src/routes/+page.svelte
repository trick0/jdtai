<script>
	import SvelteMarkdown from 'svelte-markdown';
	import pages from '../assets/pages.json';
</script>

<main class="w-full h-full">
	{#each pages as page}
		<div 
			class="page h-full p-8 flex flex-col {page.class}" 
			id={page.title + page.code} 
			style="justify-content: {page.position}; background-size: {page.backgroundSize}; background-image: url('{page.code}.png'); background-repeat: no-repeat; background-position: {page.backgroundPosition}; background-color: {page.background}; color: {page.color}; {page.style} ">
			{#if page.title}
				<div class="text-2xl font-bold my-4">
					{page.title}
				</div>
			{/if}
			{#each page.content as row}
				<div class="my-2 xl:w-1/2 m-auto">
					{@html row }
				</div>
			{/each}
		</div>
	{/each}
</main>

<style>
	@media only screen and (max-width: 1280px) {
		main {
			scroll-snap-type: y mandatory;
			overflow-y: scroll;
		}
	
		.page {
			scroll-snap-align: start;
		}
	}

	:global(.tag) {
		display: inline;
		margin-right: 5px;
		color: white;
		background: black;
		border-radius: 3px;
		padding: 6px;
	}

	.glitch {
		animation: glitch 0.1s linear infinite;
	}
</style>

<script>
	import SvelteMarkdown from 'svelte-markdown';
	import pages from '../assets/pages.json';
</script>

<main class="w-full h-full">
	{#each pages as page}
		<div 
			class="page h-full p-8 flex flex-col" 
			id={page.title + page.code} 
			style="justify-content: {page.position}; background-size: {page.backgroundSize}; background-image: url('{page.code}.png'); background-repeat: no-repeat; background-position: {page.backgroundPosition}; background-color: {page.background}; color: {page.color}">
			<div class="text-2xl font-bold my-4">
				{page.title}
			</div>
			{#each page.content as row}
				<div class="my-2 w-1/2">
					<SvelteMarkdown source={ row } />
				</div>
			{/each}
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

	:global(.tag) {
		display: inline;
		margin-right: 5px;
		color: white;
		background: black;
		border-radius: 3px;
		padding: 6px;
	}
</style>

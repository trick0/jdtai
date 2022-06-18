<script>
	const test = [
		{
			label: 'Page 1',
			code: 'page1'
		},
		{
			label: 'Page 2',
			code: 'page2'
		}
	];
</script>

<main class="w-full h-full">
    {#each test as page}
        <div class="page h-full" id="{page.code}">
            { page.label }
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


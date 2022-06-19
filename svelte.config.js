import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: { base: '/' },
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		})
	},
	prerender: {
		entries: []
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;

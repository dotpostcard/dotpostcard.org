import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import remarkGfm from "remark-gfm";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.svx', '.md'],
      remarkPlugins: [remarkGfm],
    })
  ],
  extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: adapter(),
    trailingSlash: 'always',
	}
};

export default config;

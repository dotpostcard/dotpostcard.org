import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: true,
    }),
  ],
  extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
    trailingSlash: 'always',
	}
};

export default config;

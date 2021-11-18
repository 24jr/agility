/** @type {import('@sveltejs/kit').Config} */
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
    target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
    vite: {
      resolve: {
        alias: {
          './runtimeConfig': './runtimeConfig.browser',
        },
      },
    },
	}
};
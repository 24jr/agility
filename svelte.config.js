import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
    target: '#svelte',
		adapter: adapter({
			// default options are shown
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
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		target: '#svelte'
// 	},
//   vite: {
//     resolve: {
//       alias: {
//         './runtimeConfig': './runtimeConfig.browser',
//       },
//     },
//   },
// };

// export default config;

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


// import adapter from '@sveltejs/adapter-node'

// /** @type {import('@sveltejs/kit').Config} */
// export default {
//   kit: {
//     target: '#svelte',
//     adapter: adapter({
//       // default options are shown
//       out: 'build',
//       precompress: false,
//       env: {
//         host: 'HOST',
//         port: 'PORT'
//       },
//     }),
//     vite: {
//       resolve: {
//         alias: {
//           './runtimeConfig': './runtimeConfig.browser',
//         },
//       },
//     },
//   },
// }

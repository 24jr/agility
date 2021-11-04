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


import adapter from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    target: '#svelte',

    adapter: adapter({
      // default options are shown
      out: 'build',
      precompress: false,
      env: {
        host: 'HOST',
        port: 'PORT'
      },
    }),

    vite: {
      resolve: {
        alias: {
          './runtimeConfig': './runtimeConfig.browser',
        },
      },
    },
  },
}



// /** @type {import('@sveltejs/kit').Config} */
// import adapter from '@sveltejs/adapter-node';

// export default {
// 	kit: {
//     target: '#svelte',
// 		adapter: adapter({
// 			// default options are shown
// 			out: 'build',
// 			precompress: false,
// 			env: {
// 				host: 'HOST',
// 				port: 'PORT'
// 			},
//       resolve: {
//         alias: {
//           './runtimeConfig': './runtimeConfig.browser',
//         },
//       },
// 		})
// 	}
// };

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//       alias: [
//       {
//         find: './runtimeConfig',
//         replacement: './runtimeConfig.browser',
//       },
//     ]
//   }
// })
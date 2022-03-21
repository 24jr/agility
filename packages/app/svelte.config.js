import adapter from '@sveltejs/adapter-static';
// import preprocess from 'svelte-preprocess';

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  // preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    vite: {
      resolve: {
        alias: {
          './runtimeConfig': './runtimeConfig.browser'
        }
      }
    }
  }
};

export default config;
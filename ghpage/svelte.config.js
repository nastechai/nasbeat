import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // SPA fallback for GitHub Pages
      fallback: 'index.html',
    }),
    paths: { base: '' },
    prerender: {
      entries: ['*'], // prerender all routes
      handleHttpError: 'warn'
    }
  }
};

export default config;

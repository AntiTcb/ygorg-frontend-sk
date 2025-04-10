import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      config: 'wrangler.toml',
      platformProxy: {
        configPath: './wrangler.toml',
      },
    }),
    alias: {
      $houdini: path.resolve('.', '$houdini'),
    },
  },
};

export default config;

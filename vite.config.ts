import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

const useMkcert = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [
    paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),
    houdini(),
    enhancedImages(),
    sveltekit(),
    useMkcert ? mkcert() : null,
    Icons({
      compiler: 'svelte',
      autoInstall: true,
      customCollections: {
        custom: FileSystemIconLoader('src/lib/assets/images/icons'),
      },
    }),
  ],
});

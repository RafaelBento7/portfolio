// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this to your production URL once deployed on Netlify.
  site: 'https://example.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});

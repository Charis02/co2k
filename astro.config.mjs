// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          importLoaders: 1,
        },
      },
    },
  },
  site: 'https://charis02.github.io',
  base: '/co2k',
});


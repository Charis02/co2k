// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
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

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
  site: 'https://charis02.github.io/co2k',
  base: '/co2k',
});

// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

export default {
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
    base: 'co2k',
  };
  
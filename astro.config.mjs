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
  };
  
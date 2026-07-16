import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://apexdef.in',
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});

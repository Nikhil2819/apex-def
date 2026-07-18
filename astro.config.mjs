import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://apexdef.in',
  integrations: [sitemap()],
  trailingSlash: 'never',
  compressHTML: true,

  build: {
    // Inline all CSS: kills 3 render-blocking requests per page (Lighthouse ~450ms);
    // page HTML stays well under budget and the site is fully static anyway.
    inlineStylesheets: 'always',
  },

  adapter: cloudflare(),
});
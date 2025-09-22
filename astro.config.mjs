import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://protagonistss.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'never',
  server: {
    port: 3000,
    host: true
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
  ]
});

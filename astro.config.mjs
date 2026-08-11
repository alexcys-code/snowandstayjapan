import { defineConfig } from 'astro/config';

// Served from the custom domain snowandstayjapan.com via GitHub Pages.
// The domain is declared in public/CNAME, which Pages reads on deploy.

export default defineConfig({
  site: 'https://snowandstayjapan.com',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
});

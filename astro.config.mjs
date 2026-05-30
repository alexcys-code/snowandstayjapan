import { defineConfig } from 'astro/config';

// Change `base` to match your GitHub repository name.
// e.g. base: '/japan-trip' for github.com/yourname/japan-trip
// or base: '/' for a custom domain

export default defineConfig({
  site: 'https://alexcys-code.github.io',
  base: '/snowandstayjapan',
  output: 'static',
  trailingSlash: 'always',
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jmayprofessional.github.io/search-hawk/', // your GitHub Pages URL
  base: '/search-hawk/', // critical for routing & assets
  integrations: [tailwind(), mdx()],
});

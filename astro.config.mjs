import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cdes.acidni.net',
  integrations: [tailwind()],
  output: 'static',
});

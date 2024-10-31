// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Vercelアダプターをインポート

// https://astro.build/config
export default defineConfig({
  output: 'server', // または 'hybrid'
  adapter: vercel(), // Vercelアダプターを追加
});

// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Vercelアダプターをインポート

// https://astro.build/config
export default defineConfig({
  output: 'server', // または 'hybrid'
  adapter: vercel(), // Vercelアダプターを追加
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `
  //         @use "src/sass/abstracts/functions.scss" as *;
  //         @use "src/sass/abstracts/mixins.scss" as *;
  //         @use "src/sass/abstracts/mq.scss" as *;
  //         @use "src/sass/abstracts/variables.scss" as *;
  //         `,
  //       },
  //     },
  //   },
  // },
});

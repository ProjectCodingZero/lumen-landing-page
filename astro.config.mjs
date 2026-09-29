import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import deno from '@deno/astro-adapter';
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";


// https://astro.build/config
export default defineConfig({
  vite:{
    plugins: [tailwindcss()]
  },
  adapter: deno(),
});

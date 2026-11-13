import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  output: "server",
  redirects: {
    "/services": "/productos",
  },
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
});

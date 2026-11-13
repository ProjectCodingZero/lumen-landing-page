import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import deno from "@deno/astro-adapter";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  site: "https://lumen-soft.app",
  redirects: {
    "/services": "/productos",
  },
  integrations: [sitemap()],
  adapter: deno(),
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
});

import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import deno from "@deno/vite-plugin";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react(), tailwindcss(), deno(), svgr()],
    envPrefix: "APP_",
  });
});

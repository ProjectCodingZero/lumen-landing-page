import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import deno from '@deno/vite-plugin'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), deno()],
})

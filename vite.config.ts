import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/josh-nj-lawrence.github.io/",
  plugins: [react()],
})

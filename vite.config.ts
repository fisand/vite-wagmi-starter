import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})

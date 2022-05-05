import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
// import legacy from '@vitejs/plugin-legacy'
import Unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      exclude: ['**/![index.tsx]'],
    }),
    Unocss({
      presets: [
        presetWind(),
        presetIcons({
          /* options */
        }),
      ],
    }),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})

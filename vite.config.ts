import { defineConfig, splitVendorChunkPlugin } from 'vite'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
// import legacy from '@vitejs/plugin-legacy'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import EslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
    Pages({
      exclude: ['**/![index.tsx]'],
    }),
    Unocss(),
    AutoImport({
      imports: ['react'],
      dts: './src/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          componentPrefix: 'Icon',
        }),
      ],
    }),
    EslintPlugin(),
    splitVendorChunkPlugin(),
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
  build: {
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (id.includes('antd') || id.includes('@antd') || id.includes('react') || id.includes('axios')) {
        //     return 'antd-vendor'
        //   } else if (id.includes('ethers')) {
        //     return 'ethers-vendor'
        //   } else if (id.includes('node_modules')) {
        //     return 'vendor';
        //   }
        // },
      },
    },
  },
})

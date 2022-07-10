import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// import legacy from '@vitejs/plugin-legacy'
import Analyze from 'rollup-plugin-visualizer'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import Checker from 'vite-plugin-checker'
import EslintPlugin from 'vite-plugin-eslint'
import Imp from 'vite-plugin-imp'
import Pages from 'vite-plugin-pages'

import unoConfig from './unocss.config'

const theme = unoConfig.theme!

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    Checker({ typescript: true }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
    Pages({
      exclude: ['**/!(index).tsx'],
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
    Imp({
      libList: [
        {
          libName: 'antd',
          style(name) {
            return `antd/es/${name}/style/index.js`
          },
        },
      ],
    }),
    Analyze(),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@border-radius-base': '8px',
          '@border-radius-sm': '4px',
          '@primary-color': theme.colors.primary,
        },
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-router-dom', 'react-dom', 'buffer'],
          'eth-vendor': ['ethers', 'wagmi'],
          'antd-vendor': ['antd', 'axios'],
        },
      },
    },
  },
})

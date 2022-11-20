import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// import legacy from '@vitejs/plugin-legacy'
import Analyze from 'rollup-plugin-visualizer'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import Checker from 'vite-plugin-checker'
import EslintPlugin from 'vite-plugin-eslint'
import Imp from 'vite-plugin-imp'
import Pages from 'vite-plugin-pages'

import unoConfig from './uno.config'
import { wagmiExports } from './wagmi.exports'

const theme = unoConfig.theme!

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE,
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
        dirs: [{ dir: 'src/pages', baseRoute: env.BASE || '' }],
        exclude: ['**/[A-Z]*.tsx'],
        importMode: 'sync',
      }),
      Unocss(),
      AutoImport({
        imports: [
          'react',
          // {
          //   wagmi: wagmiExports,
          // },
        ],
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
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-router-dom', 'react-dom'],
            'eth-vendor': ['ethers', 'wagmi'],
            'ui-vendor': ['antd', 'axios'],
          },
        },
      },
    },
  }
})

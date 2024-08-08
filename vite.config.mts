import { resolve } from 'node:path'

import EslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
// import Analyze from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig, loadEnv } from 'vite'
import Checker from 'vite-plugin-checker'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import Pages from 'vite-plugin-pages'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE,
    resolve: {
      alias: {
        // eslint-disable-next-line unicorn/prefer-module
        '@/': `${resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      react(),
      Checker({ typescript: true }),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections: {
          // eslint-disable-next-line unicorn/prefer-module
          'fisand-icons': FileSystemIconLoader(`${resolve(__dirname, 'src/assets/icons')}/`, svg =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')),
        },
      }),
      Pages({
        dirs: [{ dir: 'src/pages', baseRoute: env.BASE || '' }],
        exclude: ['**/[A-Z]*.tsx'],
        importMode: 'sync',
      }),
      UnoCSS(),
      AutoImport({
        imports: ['react'],
        dts: './src/auto-imports.d.ts',
        resolvers: [
          IconsResolver({
            componentPrefix: 'Icon',
          }),
        ],
        dirs: ['./src/components/ui'],
      }),
      EslintPlugin(),
      // Analyze(),
      nodePolyfills(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-router-dom', 'react-dom'],
            'wagmi-vendor': ['wagmi', 'viem'],
          },
        },
        onLog(level, log, handler) {
          // ignore rollup warning about 'use client'
          if (log.message.includes('Module level directives cause errors when bundled'))
            return

          // ignore sourcemap warning about 'Can't resolve original location of error.'
          if (log.cause && (log.cause as any).message === `Can't resolve original location of error.`) {
            return
          }

          handler(level, log)
        },
      },
    },
    optimizeDeps: {
      include: ['react-dom'],
    },
  }
})

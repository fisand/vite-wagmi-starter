import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// import Analyze from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig, loadEnv } from 'vite'
import Checker from 'vite-plugin-checker'
import EslintPlugin from 'vite-plugin-eslint'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import Pages from 'vite-plugin-pages'

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
        customCollections: {
          'fisand-icons': FileSystemIconLoader(`${resolve(__dirname, 'src/assets/icons')}/`, (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
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
      },
    },
    optimizeDeps: {
      include: ['react-dom'],
    },
  }
})

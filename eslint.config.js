import { sxzz } from '@sxzz/eslint-config'
import react from '@eslint-react/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
// import importOrder from 'eslint-plugin-import-x'

export default sxzz(
  {
    files: ['**/*.{ts,tsx}'],
    ...react.configs.recommended,
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    prettier: true,
    markdown: true,
    vue: false, // auto detection
    unocss: true, // auto detection
  },
)

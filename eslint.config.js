import react from '@eslint-react/eslint-plugin'
import { sxzz } from '@sxzz/eslint-config'
import reactHooks from 'eslint-plugin-react-hooks'
import importX from 'eslint-plugin-import-x'

export default sxzz(
  [
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
      files: ['**/*.{ts,tsx}'],
      plugins: {
        'import-x': importX,
      },
      rules: {
        'import-x/newline-after-import': ['error', { count: 1 }],
        'import-x/no-duplicates': 'error',
        'import-x/order': [
          'error',
          {
            'newlines-between': 'always-and-inside-groups',
          },
        ],
      },
    },
  ],
  {
    prettier: true,
    markdown: true,
    vue: false, // auto detection
    unocss: true, // auto detection
  },
)

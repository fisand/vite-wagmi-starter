import react from '@eslint-react/eslint-plugin'
import { sxzz } from '@sxzz/eslint-config'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

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
        'simple-import-sort': simpleImportSort,
      },
      rules: {
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: true,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            allowSeparatedGroups: false,
          },
        ],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [[String.raw`^@?\w`], ['^'], [String.raw`^\.`], [String.raw`^\u0000`]],
          },
        ],
        'simple-import-sort/exports': 'error',
        'import/order': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
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

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  ignorePatterns: ['*.generated.tsx', 'types.ts'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    semi: 'error',
    'react/jsx-pascal-case': 2,
    'import/order': [
      'error',
      { alphabetize: { order: 'asc', caseInsensitive: true } }
    ],
    'import/prefer-default-export': 'off'
  }
};

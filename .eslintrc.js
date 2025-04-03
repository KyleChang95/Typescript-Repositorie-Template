module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'node',
    'promise'
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module'
  },
  rules: {
    'camelcase': 'off',
    'import/no-absolute-path': 'off'
  },
  ignorePatterns: [
    '*/entities/*.ts'
  ]
};
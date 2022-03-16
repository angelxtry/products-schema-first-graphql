module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort'],
  extends: ['plugin:prettier/recommended'],
  env: {
    es2021: true,
    node: true,
  },
  rules: {
    'no-console': 'error',
  },
};

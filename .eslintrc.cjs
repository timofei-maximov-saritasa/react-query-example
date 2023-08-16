module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@moltenship/eslint-config-react'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/no-implicit-any-catch': 'off'
  }
}

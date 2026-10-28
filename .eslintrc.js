module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-native/no-inline-styles': 'off',
  },
  overrides: [
    {
      files: ['/scripts/*.mjs'],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
  ],
};

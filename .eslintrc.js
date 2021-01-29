module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
};

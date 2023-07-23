module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'no-unused-vars': 1,
    'no-shadow': 1,
    'no-undef': 1,
    'import/prefer-default-export': 0,
  },
};

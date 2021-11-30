module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'jest'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': [0],
    'no-console': [1, { allow: ['error', 'warn'] }],
    'comma-dangle': ['error'],
    'no-debugger': 1,
    'linebreak-style': 0,
    'max-len': [1, 600, 2],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};

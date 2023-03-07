module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  env: {
    jest: true,
  },
  rules: {
    curly: 0,
    'comma-dangle': 0,
    'react-native/no-inline-styles': 0,
    'no-shadow': 0,
    'no-spaced-func': 0,
    'react/no-unstable-nested-components': 1,
    'import/namespace': 0,
    'import/default': 0,
    'import/order': [
      1,
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          [('sibling', 'index', 'object')],
        ],
        'newlines-between': 'always',
        pathGroups: [{group: 'builtin', pattern: 'react', position: 'before'}],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

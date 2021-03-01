module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    es2021: true,
    browser: true,
    'react-native/react-native': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-native'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['app'],
        alias: {
          _assets: './app/assets',
          _components: './app/components',
          _atoms: './app/components/atoms',
          _molecules: './app/components/molecules',
          _organisms: './app/components/organisms',
          _navigations: './app/navigations',
          _screens: './app/screens',
          _services: './app/services',
          _styles: './app/styles',
          _theme: './app/theme',
          _utils: './app/utilities',
          _redux: './app/redux',
        },
      },
    },
  },
};

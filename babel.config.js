module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
        },
      },
    ],
  ],
};

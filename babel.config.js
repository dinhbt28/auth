module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@': './src/',
          '@stores': './src/stores',
          '@services': './src/services',
          '@contexts': './src/contexts',
          '@constants': './src/constants',
          '@providers': './src/providers',
        },
      },
    ],
  ],
};

module.exports = {
  roots: ['<rootDir>/src'],
  preset: '@testing-library/react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/jest/mockSvg.ts',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^#/(.*)$': '<rootDir>/src/modules/$1',
    d3: '<rootDir>/node_modules/d3/dist/d3.min.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(' +
      '@react-native|' +
      'react-native|' +
      '@react-navigation|' +
      'react-native-iphone-x-helper|' +
      'react-native-responsive-fontsize|' +
      '/.*)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
};

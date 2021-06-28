const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js?$': '<rootDir>/scripts/jest/transform.js',
    '.*\\.(vue)$': '<rootDir>/../../node_modules/vue-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@storybook/.*\\.vue$))',
  ],
  testMatch: [
    '<rootDir>/test/**/*.(spec|test).js',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'vue'],
  moduleNameMapper: {
    '\\.(png|gif|webp|svg)$': '<rootDir>/scripts/jest/__mocks__/file.js',
    '\\.(css|scss)$': '<rootDir>/scripts/jest/__mocks__/style.js',
    '^@components(.*)$': '<rootDir>/components$1',
    '^@assets(.*)$': '<rootDir>/.storybook/assets$1',
    '^@articles(.*)$': '<rootDir>/.storybook/assets$1',
    '^@mock(.*)$': '<rootDir>/.storybook/mock$1',
  },
}

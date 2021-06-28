const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  transform: {
    '^.+\\.js?$': '<rootDir>/scripts/jest/transform.js',
  },
  testMatch: [
    '<rootDir>/test/**/*.(spec|test).js',
  ],
}

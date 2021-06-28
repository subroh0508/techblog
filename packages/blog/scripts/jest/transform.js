module.exports = require('babel-jest').default.createTransformer({
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' }},
    ],
  ],
  plugins: ['require-context-hook'],
});

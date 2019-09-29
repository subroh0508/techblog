const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ["@babel/preset-env", {
                  "useBuiltIns": "usage",
                  "corejs": 3,
                }],
              ],
            },
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  externals: [nodeExternals()],
}

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const externals = [
  'express',
  'firebase-admin',
  'firebase-functions',
  '@vue/server-renderer',
  'vue',
  'vue-router',
  'vuex',
  'vuex-router-sync',
];

module.exports = {
  entry: path.resolve(__dirname, '../../functions/index.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../../functions/build'),
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
              plugins: ['@babel/plugin-transform-modules-commonjs'],
            },
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: { removeComments: false },
        },
      },
    ]
  },
  externals: externals.reduce(
    (acc, name) => ({ ...acc, [name]: true }),
    {}
  ),
  optimization: {
    splitChunks: false,
    minimize: false,
  },
}

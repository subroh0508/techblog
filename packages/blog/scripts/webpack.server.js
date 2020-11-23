const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';
const entryPath = dev ?
  path.resolve(__dirname, '../entry-server.js') :
  path.resolve(__dirname, '../entry-functions.js')

module.exports = merge(common, {
  entry: [
    'core-js',
    'regenerator-runtime/runtime',
    entryPath,
  ],
  externals: nodeExternals({
    allowlist: /\.css$/,
  }),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  resolve: {
    alias: {
      vue: '@vue/runtime-dom/dist/runtime-dom.cjs.js',
    },
    mainFields: ['main', 'module'], // https://github.com/vuejs/vue-next/issues/2244
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env", {
              "useBuiltIns": "usage",
              "corejs": 3,
            }],
          ],
          plugins: ['transform-html-import-require-to-string'],
        },
        exclude: /node_modules/,
      },
      {
        test: /(\.css|\.scss)/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'common.[chunkhash].css',
    }),
  ],
});

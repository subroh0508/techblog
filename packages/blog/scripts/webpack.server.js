const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: [
    'core-js',
    'regenerator-runtime/runtime',
    path.resolve(__dirname, '../entry-server.js'),
  ],
  externals: nodeExternals({
    allowlist: /\.css$/,
  }),
  output: {
    path: path.resolve(__dirname, '../build/server'),
    filename: 'server.bundle.js',
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
  optimization: {
    splitChunks: false,
    minimize: false,
  },
});

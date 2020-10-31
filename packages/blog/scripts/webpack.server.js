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
    allowlist: /\.(css|scss|vue)$/,
  }),
  output: {
    ...common.output,
    path: path.resolve(__dirname, '../functions/assets'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.cjs.js',
      '@components': path.resolve(__dirname, '../components'),
    },
    mainFields: ['main', 'module'], // https://github.com/vuejs/vue-next/issues/2244
  },
  module: {
    rules: [
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

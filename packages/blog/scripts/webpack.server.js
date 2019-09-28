const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: [
    'core-js',
    'regenerator-runtime/runtime',
    path.resolve(__dirname, '../entry-server.js'),
  ],
  externals: nodeExternals({
    whitelist: /\.css$/,
  }),
  output: {
    ...common.output,
    path: path.resolve(__dirname, '../build/server'),
    filename: 'server.[chunkhash].js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.css|\.scss)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'common.[chunkhash].css',
    }),
    new VueSSRServerPlugin(),
  ],
});

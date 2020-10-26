const path = require('path');
const { merge } = require('webpack-merge');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(__dirname, '../entry-client.js'),
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    'core-js-bundle': 'core-js-bundle',
  },
  module: {
    rules: [
      {
        test: /(\.css|\.scss)/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { esModule: false } },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'core-js-bundle',
          path: 'minified.js',
        },
        {
          name: 'regenerator-runtime',
          path: 'runtime.js',
          prodUrl: 'https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.3/runtime.min.js',
        },
        {
          name: 'vue',
          var: 'Vue',
          path: 'dist/vue.runtime.global.prod.js',
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'dist/vue-router.global.prod.js',
        },
        {
          name: 'vuex',
          var: 'Vuex',
          path: 'dist/vuex.global.prod.js',
        },
      ],
      prod: true,
      pathToNodeModules: path.resolve(__dirname, '../../../'),
      publicPath: '/',
    }),
    new MiniCssExtractPlugin({
      filename: 'common.[chunkhash].css',
    }),
    new StyleExtHtmlWebpackPlugin({
      minify: true,
    }),
  ],
});

const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const sass = require('sass');

module.exports = {
  'stories': [
    '../components/**/*.stories.@(js|mdx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  'core': {
    'builder': 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    const mode = configType.toLowerCase();
    const dev = configType === 'DEVELOPMENT';

    return merge(config, {
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, '../components'),
          '@assets': path.resolve(__dirname, './assets'),
        },
      },
      module: {
        rules: [
          {
            test: /(\.css|\.scss)/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { esModule: false } },
              { loader: 'sass-loader', options: { implementation: sass } },
            ],
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: `'${mode}'`,
            BASE_URL: `'${dev ? 'http://localhost:8080' : 'https://subroh0508.net'}'`,
            IMAGES_BASE_URL: `'static/media/.storybook/assets'`,
          },
        }),
      ],
    });
  },
}

const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const {withZephyr} = require('zephyr-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const { join } = require('path');
const {REMOTE1_PORT} = require('../../libs/global-constants/src/index.cjs');
const baseConfig = require('./module-federation.config');

module.exports = withZephyr()({
  output: {
    path: join(__dirname, '../../dist/apps/remote1'),
  },
  devServer: {
    port: REMOTE1_PORT,
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
    new ModuleFederationPlugin(baseConfig),
  ],
});

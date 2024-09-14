const { composePlugins, withNx, withReact } = require('@nx/rspack');

const { withModuleFederation} = require('@nx/rspack/module-federation');
// const {withZephyr} = require('zephyr-webpack-plugin');
const baseConfig = require('./module-federation.config');
const {REMOTE2_PORT, REMOTE2_NAME} = require('../../libs/global-constants/src/index.cjs');


const config = {
  ...baseConfig,
};


module.exports = composePlugins(withNx(), withReact(),withModuleFederation(config, {dts:false}), (config) => {
  /**
   * The dev server port needs to also be updated in the project.json file
   */
  config.output.uniqueName = REMOTE2_NAME;
  config.devServer = {
    port: REMOTE2_PORT,
  };
  return config;
});

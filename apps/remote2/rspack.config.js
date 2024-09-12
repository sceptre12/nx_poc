const { composePlugins, withNx, withReact } = require('@nx/rspack');

const { withModuleFederation} = require('@nx/rspack/module-federation');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
};


module.exports = composePlugins(withNx(), withReact(),withModuleFederation(config, {dts:false}) , (config) => {
  return config;
});

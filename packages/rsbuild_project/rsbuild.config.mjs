import { defineConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
// import { withZephyr } from 'zephyr-webpack-plugin';
import { pluginReact } from '@rsbuild/plugin-react';
import {RSBUILD_REMOTE_NAME, RSBUILD_PROJECT_PORT} from '../../libs/global-constants/src/index';

export default defineConfig({
  dev: {
    // assetPrefix must be configured if using manifest
    assetPrefix: `http://localhost:${RSBUILD_PROJECT_PORT}/`,
  },
  server: {
    port: RSBUILD_PROJECT_PORT,
  },
  plugins: [
    pluginReact(),
  ],
  tools: {
    rspack: (config, {appendPlugins}) => {

      if(config.output){
        /**
         * We will need a global space that contains a SET of all of the remotes
         */
        config.output.uniqueName = RSBUILD_REMOTE_NAME;
      }

      appendPlugins([
          new ModuleFederationPlugin({
            name: RSBUILD_REMOTE_NAME,
            exposes: {
                './app': './src/App.jsx',
            },
            shared: ['react', 'react-dom'],
          })
      ]);


      // Adds in the zephyr configuration
      // return withZephyr()(config);
      return config;
    },
  },
});

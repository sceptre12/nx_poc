import { defineConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { withZephyr } from 'zephyr-webpack-plugin';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  dev: {
    // assetPrefix must be configured if using manifest
    assetPrefix: 'http://localhost:3001/',
  },
  server: {
    port: 3001,
  },
  plugins: [
    pluginReact(),
  ],
  tools: {
    rspack: (config) => {

      if(config.output){
        /**
         * We will need a global space that contains a SET of all of the remotes
         */
        config.output.uniqueName = 'federation_provider';
      }

      if(config.plugins){
        config.plugins.push(
          new ModuleFederationPlugin({
            name: 'federation_provider',
            exposes: {
                  './app': './src/index.jsx',
            },
            shared: ['react', 'react-dom'],
          })
        );
      }


      // Adds in the zephyr configuration
      return withZephyr()(config);
    },
  },
});

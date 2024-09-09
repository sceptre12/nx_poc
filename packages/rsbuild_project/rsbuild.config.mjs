import { defineConfig } from '@rsbuild/core';
import { withZephyr } from 'zephyr-webpack-plugin';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: (config) => {
      // Adds in the zephyr configuration
      return withZephyr()(config);
    },
  },
});

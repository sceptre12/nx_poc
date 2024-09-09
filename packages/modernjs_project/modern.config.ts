import { appTools, defineConfig } from '@modern-js/app-tools';
import { withZephyr } from 'zephyr-webpack-plugin';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  dev: {
    port: 4200,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
  ],
  tools: {
    // @ts-ignore
    rspack: config => {
      // @ts-ignore
      return withZephyr()(config);
    },
  },
});

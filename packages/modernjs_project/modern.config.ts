import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';
import { MODERNJS_PROJECT_PORT } from '../../libs/global-constants/src/index.cjs';

// NOTE Zephyr is not compatible with Modern right now but its in the works

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  dev: {
    port: MODERNJS_PROJECT_PORT,
  },
  source: {
    enableAsyncEntry: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    moduleFederationPlugin(),
  ],
});

import { ModuleFederationConfig } from '@nx/webpack';
import { REMOTE1_NAME } from '../../libs/global-constants/src/index.cjs';

const config: ModuleFederationConfig = {
  name: REMOTE1_NAME,

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;

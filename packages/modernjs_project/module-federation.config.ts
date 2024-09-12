import { createModuleFederationConfig } from '@module-federation/modern-js';
import {RSBUILD_REMOTE_NAME, RSBUILD_PROJECT_PORT} from '../../libs/global-constants/src/index.cjs';


export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    [RSBUILD_REMOTE_NAME]: `${RSBUILD_REMOTE_NAME}@http://localhost:${RSBUILD_PROJECT_PORT}/mf-manifest.json`,
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
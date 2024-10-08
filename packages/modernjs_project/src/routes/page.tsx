import { lazy,Suspense } from 'react';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

import RsbuildComponent from 'rsbuild_remote1/app';
import {MODERNJS_REMOTE_NAME, REMOTE1_NAME, REMOTE1_PORT, REMOTE2_NAME, REMOTE2_PORT } from '@global-constants';
import './index.css';

init({
  name: MODERNJS_REMOTE_NAME,
  remotes: [
    {
      name: REMOTE1_NAME,
      // mf-manifest.json is a file type generated in the new version of Module Federation build tools, providing richer functionality compared to remoteEntry
      // Preloading depends on the use of the mf-manifest.json file type
      entry: `http://localhost:${REMOTE1_PORT}/remoteEntry.js`,
      alias: "app1"
    },
    {
      name: REMOTE2_NAME,
      entry: `http://localhost:${REMOTE2_PORT}/remoteEntry.js`,
      alias: "app2"
    },
  ],
});


/**
 * The typings for the Rsbuild component weren't created for modern js
 * Will need to fix that later
 */
const Remote1Component = lazy(() => loadRemote("app1/Module").then((m) => m));
const Remote2Component = lazy(() => loadRemote("app2/button").then((m) => m));



/**
 * Cannot dynamically import a remote component with module federation build time setup
 */
// const RsbuildComponent = lazy(() => import(`rsbuild_remote1/app`));

const Index = () => (
  <div className="container-box">
    <main>
      <div className="title">
        Welcome to
        <p className="name">Modern JS SHELL</p>
      </div>
      <hr className='w-full h-px my-8 border-indigo-500' />
      <div>
        <h1>This section is built during the build step for this app</h1>
          <RsbuildComponent />
      </div>
      <hr className='w-full h-px my-8 border-indigo-500' />
      <div className='border-4 border-sky-500 mb-4'>
        <h1>This section is loaded at run time</h1>
        <Suspense fallback={<div>LOADING Remote1</div>}>
          <Remote1Component />
        </Suspense>
      </div>
      <div className='border-4 border-indigo-500'>
        <h1>This section is loaded at run time</h1>
        <Suspense fallback={<div>LOADING Remote2</div>}>
          <Remote2Component />
        </Suspense>
      </div>
    </main>
  </div>
);

export default Index;

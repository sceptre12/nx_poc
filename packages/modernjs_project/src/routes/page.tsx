import { Suspense } from 'react';
import './index.css';
import RsbuildComponent from 'rsbuild_remote1/app';

/**
 * Cannot dynamically import a remote component with module federation
 */
// const RsbuildComponent = lazy(() => import(`rsbuild_remote1/app`));

const Index = () => (
  <div className="container-box">
    <main>
      <div className="title">
        Welcome to
        <p className="name">Modern.js</p>
      </div>
      <div>
        <h1>This section is importing in a new component from module federation</h1>
          <RsbuildComponent />
      </div>
    </main>
  </div>
);

export default Index;

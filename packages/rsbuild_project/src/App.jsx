import './App.css';

/**
 * NX mono repo types have certain restrictions
 * When trying to use a component or library from outside of the "packaged" project space.
 * Importing it won't work out of the box. You'll have to update the build configurations of
 * the "packaged" project in order to reference the library.
 * @returns
 */
// import { GlobalConfig } from '@global_config';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild Remote</h1>
      {/* <GlobalConfig /> */}
    </div>
  );
};

export default App;

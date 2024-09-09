import NxWelcome from './nx-welcome';
import { GlobalConfig } from '@global_config';

export function App() {
  return (
    <div>
      <NxWelcome title="remote1" />
      <GlobalConfig />
    </div>
  );
}

export default App;

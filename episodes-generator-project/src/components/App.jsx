import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Historic from './Historic/Historic';
import NotFound from './NotFound/NotFound';

import '../assets/styles/App.scss';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/episodes" component={Historic} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;

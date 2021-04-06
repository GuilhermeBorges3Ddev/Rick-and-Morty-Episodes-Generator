import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store/index';

import Home from './Home/Home';
import Historic from './Historic/Historic';
import NewEpisode from './NewEpisode/NewEpisode';
import NotFound from './NotFound/NotFound';

import '../assets/styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/episodes" component={Historic} />
          <Route path="/new-episode" component={NewEpisode} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Provider>
  );
}

export default App;

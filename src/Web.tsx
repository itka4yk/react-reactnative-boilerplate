import 'regenerator-runtime/runtime';
import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import './styles.css';
import createStore from './store/createStore';
import Sample from './components/web/Sample';
import SampleEmployeesContainer from './containers/SampleEmployees.container';

const history = createBrowserHistory();
const store = createStore(history);

const Web = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={() => <SampleEmployeesContainer><Sample /></SampleEmployeesContainer>} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Web;

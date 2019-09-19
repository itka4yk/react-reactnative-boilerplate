import React from 'react';
import 'regenerator-runtime/runtime'
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';

import createStore from './store/createStore';
import SampleEmployeesContainer from './containers/SampleEmployees.container';
import Sample from './components/mobile/Sample';

const history = createMemoryHistory();
const store = createStore(history);

const Mobile = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={() => (
          <SampleEmployeesContainer><Sample /></SampleEmployeesContainer>
        )} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Mobile;

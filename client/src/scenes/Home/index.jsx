import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './../../store';

import Rounting from './../../containers/Routing';

const Home =  () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Rounting />
    </ConnectedRouter>
  </Provider>
);

export default Home;

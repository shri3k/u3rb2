import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store';

import routes from './routes';

render(<Provider store={configureStore()}>
  <Router history={browserHistory} routes={routes} />
    </Provider>, document.querySelector('#app'));

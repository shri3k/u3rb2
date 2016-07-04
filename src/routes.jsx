import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Header from './containers/Header';
import About from './components/About';

import InputBarCont from './containers/App';

import {createStore} from 'redux';

import reducers from './reducers';

var store = createStore(reducers, {});

var routes = (<Route path="/" component={Header}>
  <IndexRoute component={InputBarCont} store={store}/>
	<Route path="/About" component={About} />
</Route>);

export
default routes;
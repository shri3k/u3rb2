import React from 'react';

import {
  renderToString
} from 'react-dom/server';

import {
  Provider
} from 'react-redux';

import {
  createStore
} from 'redux';

import {
  match,
  RouterContext
} from 'react-router';

import configureStore from '../store';

import routes from '../routes';
import * as reducer from '../reducers';

let stores = createStore(reducer.default);

function matchP(url) {
  return new Promise((res, rej) => {
    match({
      location: url,
      routes: routes
    }, (err, redirection, props) => {
      if (err) {
        rej({
          'err': 500,
          'msg': err
        });
      } else if (redirection) {
        rej();
      } else if (props) {
        let component = (<Provider store={configureStore()}>
					                  <RouterContext {...props} />
				                  </Provider>);
        res(renderToString(component));
      }
    });
  });
}

export default matchP;

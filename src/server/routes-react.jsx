import React from 'react';
import {
  renderToString
}
from 'react-dom/server';
import {
  Provider
}
from 'react-redux';
import {
  createStore
}
from 'redux';
import {
  match, RouterContext
}
from 'react-router';

import routes from '../routes';

let stores = createStore((state, action) => {});

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
        let component = (<Provider store={stores}>
					                  <RouterContext {...props} />
				                  </Provider>);
        res(renderToString(component));
      }
    });
  });
}

export
default matchP;

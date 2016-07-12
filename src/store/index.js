import { createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(pre={}) {
  const store = createStore(rootReducer, pre);
  return store;
};

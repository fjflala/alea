/**
 * Module dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import rootReducer from './reducer';

/**
 * Initialize store
 */
const store = createStore(rootReducer, applyMiddleware(thunk));

/**
 * Start application
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/**
 * PWA
 */
serviceWorker.register();

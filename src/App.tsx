/**
 * @format
 * @flow
 */

import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {HashRouter as Router} from 'react-router-dom';

import rootReducer from './reducers';
import Main from './main';

export const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);

export default App;

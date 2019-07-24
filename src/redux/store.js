import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { app } from './reducers/app';

const logger = createLogger({
  duration: true,
  predicate: (getState, action) => !!action.type,
  // tera transformer (https://github.com/LogRocket/redux-logger)
});

const middlewares = [logger, ReduxThunk];
const preloadState = {};
const store = createStore(app, preloadState, applyMiddleware(...middlewares));

function ReduxProvider (props) {
  return (
    <Provider store = {store}>
      {props.children}
    </Provider>
  );
}

export default ReduxProvider;

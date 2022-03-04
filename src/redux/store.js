import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDeveTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const reducerTest = (state, action) => state;

const rootReducer = combineReducers({
  reducerTest,
});

const store = createStore(rootReducer, composeWithDeveTools(applyMiddleware(thunk)));

export default store;

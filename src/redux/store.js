import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  teste: 'teste',
}

const reducerTest = (state = INITIAL_STATE, action) => state;

const rootReducer = combineReducers({
  reducerTest,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

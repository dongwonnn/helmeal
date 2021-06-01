import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware()),
);

export default store;

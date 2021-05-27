import { combineReducers } from 'redux';
import option from './option';
import address from './address';

const rootReducer = combineReducers({
  option,
  address,
});

export default rootReducer;

import { combineReducers } from 'redux';
import option from './option';
import address from './address';
import food from './food';
import auth from './auth';

const rootReducer = combineReducers({
  option,
  address,
  food,
  auth,
});

export default rootReducer;

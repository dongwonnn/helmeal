import { combineReducers } from 'redux';
import option from './option';
import address from './address';
import food from './food';

const rootReducer = combineReducers({
  option,
  address,
  food,
});

export default rootReducer;

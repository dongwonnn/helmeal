import { combineReducers } from 'redux';
import option from './option';
import address from './address';
import food from './food';
import auth from './auth';
import orderList from './orderList';

const rootReducer = combineReducers({
  auth,
  option,
  address,
  food,
  orderList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

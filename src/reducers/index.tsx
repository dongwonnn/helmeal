import { combineReducers } from 'redux';
import option from './option';
import address from './address';
import food from './food';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  option,
  address,
  food,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

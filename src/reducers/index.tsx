import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import option from './option';
import address from './address';
import food from './food';
import auth, { authSaga } from './auth';
import orderList from './orderList';
import loading from './loading';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  option,
  address,
  food,
  orderList,
  loading,
  user,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

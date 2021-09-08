import * as authApi from '../lib/api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';
import { IUser } from '../types/IUser';
import { IAuth } from '../types/IAuth';
import { AxiosResponse } from 'axios';

export const TEMP_SET_USER = 'user/TEMP_SET_USER' as const;

export const CHECK = 'user/CHECK' as const;
export const CHECK_SUCCESS = 'user/CHECK_SUCCESS' as const;
export const CHECK_FAILURE = 'user/CHECK_FAILURE' as const;

export const LOGOUT = 'user/LOGOUT' as const;

export const tempSetUser = (user: IUser) => ({
  type: TEMP_SET_USER,
  user,
});

export const check = () => ({
  type: CHECK,
});

export const checkSuccess = (payload: IUser) => ({
  type: CHECK_SUCCESS,
  payload,
});

export const checkFailure = (payload: string) => ({
  type: CHECK_FAILURE,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

type UserAction =
  | ReturnType<typeof tempSetUser>
  | ReturnType<typeof check>
  | ReturnType<typeof checkSuccess>
  | ReturnType<typeof checkFailure>
  | ReturnType<typeof logout>;

function* checkSaga() {
  yield put(startLoading(CHECK));
  try {
    const response: AxiosResponse<{ user: IAuth }> = yield call(authApi.check);

    yield put({
      type: CHECK_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: CHECK_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(CHECK));
}

function* checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    // console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authApi.logout);
    localStorage.removeItem('user');
  } catch (e) {
    // console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

type UserState = {
  user: IUser | null;
  checkError: string | null;
};

const initialStete = {
  user: null,
  checkError: null,
};

const user = (
  state: UserState = initialStete,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case CHECK_SUCCESS:
      return {
        ...state,
        user: action.payload,
        checkError: null,
      };
    case CHECK_FAILURE:
      return {
        ...state,
        user: null,
        checkError: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default user;

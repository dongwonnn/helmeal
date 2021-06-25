import * as authApi from '../lib/api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';

const TEMP_SET_USER = 'user/TEMP_SET_USER';

const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';

const LOGOUT = 'user/LOGOUT';

export const tempSetUser = (user) => ({
  type: TEMP_SET_USER,
  user,
});

export const check = () => ({
  type: CHECK,
});

export const logout = () => ({
  type: LOGOUT,
});

// saga 생성
function* checkSaga() {
  yield put(startLoading(CHECK));
  try {
    const response = yield call(authApi.check);

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
    // 체크 실패시 로컬스토리지 삭제
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    // logout 호출 후 user 제거
    yield call(authApi.logout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

// SAGA 통합
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialStete = {
  user: null,
  checkError: null,
};

const user = (state = initialStete, action) => {
  switch (action.type) {
    case TEMP_SET_USER:
      return {
        ...state,
        user: action.payload,
      };
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
        checkError: error,
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

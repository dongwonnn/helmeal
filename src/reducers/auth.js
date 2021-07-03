import * as authApi from '../lib/api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const changeField = ({ form, key, value }) => ({
  type: CHANGE_FIELD,
  form, // lgoin인지, register 인지
  key, // userId, password,
  value, // 실제 바꾸려는 값
});

export const initializeForm = (form) => ({
  type: INITIALIZE_FORM,
  form,
});

export const login = ({ email, userId, password }) => ({
  type: LOGIN,
  email,
  userId,
  password,
});

export const register = ({ email, userId, password }) => ({
  type: REGISTER,
  email,
  userId,
  password,
});

// saga 생성
function* registerSaga(action) {
  yield put(startLoading(REGISTER));
  try {
    const { email, userId, password } = action;
    const response = yield call(authApi.register, {
      email,
      userId,
      password,
    });

    yield put({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: REGISTER_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(REGISTER));
}

function* loginSaga(action) {
  yield put(startLoading(LOGIN));
  try {
    const { userId, email, password } = action;
    const response = yield call(authApi.login, {
      userId,
      email,
      password,
    });

    yield put({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(LOGIN));
}

// SAGA 통합
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialStete = {
  register: {
    userId: null,
    password: null,
    passwordConfirm: null,
    email: null,
    phoneNum: null,
  },
  login: {
    userId: null,
    email: null,
    password: null,
  },
  auth: null,
  authError: null,
};

const auth = (state = initialStete, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.key]: action.value,
        },
      };
    case INITIALIZE_FORM:
      return {
        ...state,
        [action.form]: initialStete[action.form],
        authError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        authError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: error,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        authError: null,
        auth: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        authError: error,
      };
    default:
      return state;
  }
};

export default auth;

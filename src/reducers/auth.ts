import * as authApi from '../lib/api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';
import { IChangeFiled } from '../types/IChangeFiled';
import { IAuth } from '../types/IAuth';
import { IRegister } from '../types/IRegister';
import { AxiosResponse } from 'axios';
import { IUser } from '../types/IUser';

const CHANGE_FIELD = 'auth/CHANGE_FIELD' as const;
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM' as const;

const LOGIN = 'auth/LOGIN' as const;
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS' as const;
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE' as const;

const REGISTER = 'auth/REGISTER' as const;
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS' as const;
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE' as const;

export const changeField = ({ form, key, value }: IChangeFiled) => ({
  type: CHANGE_FIELD,
  form, // lgoin인지, register 인지
  key, // userId, password...
  value, // 실제 바꾸려는 값
});

export const initializeForm = (form: string) => ({
  type: INITIALIZE_FORM,
  form,
});

export const login = ({ email, userId, password }: IAuth) => ({
  type: LOGIN,
  email,
  userId,
  password,
});

export const loginSuccess = (payload: string) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: string) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const register = ({ email, userId, password }: IRegister) => ({
  type: REGISTER,
  email,
  userId,
  password,
});

export const registerSuccess = (payload: string) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFailure = (payload: string) => ({
  type: REGISTER_FAILURE,
  payload,
});

// 액션 타입
type AuthAction =
  | ReturnType<typeof changeField>
  | ReturnType<typeof initializeForm>
  | ReturnType<typeof login>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof register>
  | ReturnType<typeof registerSuccess>
  | ReturnType<typeof registerFailure>;

// saga 생성
function* registerSaga(action: ReturnType<typeof register>) {
  yield put(startLoading(REGISTER));
  try {
    const { email, userId, password } = action;
    const response: AxiosResponse = yield call(authApi.register, {
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

function* loginSaga(action: ReturnType<typeof login>) {
  yield put(startLoading(LOGIN));
  try {
    const { userId, email, password } = action;
    const response: AxiosResponse = yield call(authApi.login, {
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

// 초기값 타입
type AuthState = {
  register: {
    userId: string | null;
    password: string | null;
    passwordConfirm: string | null;
    email: string | null;
    phoneNum: string | null;
  };
  login: {
    email: string | null;
    userId: string | null;
    password: string | null;
  };
  auth: string | null;
  authError: string | null;
};

const initialStete = {
  register: {
    userId: null,
    password: null,
    passwordConfirm: null,
    email: null,
    phoneNum: null,
  },
  login: {
    email: null,
    userId: null,
    password: null,
  },
  auth: null,
  authError: null,
};

const auth = (
  state: AuthState = initialStete,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.form]: {
          // ...state[action.form],
          ...state['login'],
          [action.key]: action.value,
        },
      };
    // case INITIALIZE_FORM:
    //   return {
    //     ...state,
    //     [action.form]: initialStete[action.form],
    //     authError: null,
    //   };
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        authError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: action.payload,
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
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default auth;

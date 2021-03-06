import * as authApi from '../lib/api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';
import { IChangeFiled } from '../types/IChangeFiled';
import { IAuth } from '../types/IAuth';
import { IRegister } from '../types/IRegister';
import { AxiosResponse } from 'axios';

const CHANGE_FIELD_LOGIN = 'auth/CHANGE_FIELD_LOGIN' as const;
const CHANGE_FIELD_REGISTER = 'auth/CHANGE_FIELD_REGISTER' as const;
const INITIALIZE_LOGIN_FORM = 'auth/INITIALIZE_LOGIN_FORM' as const;
const INITIALIZE_REGISTER_FORM = 'auth/INITIALIZE_REGISTER_FORM' as const;

const LOGIN = 'auth/LOGIN' as const;
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS' as const;
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE' as const;

const REGISTER = 'auth/REGISTER' as const;
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS' as const;
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE' as const;

export const changeFieldLogin = ({ form, key, value }: IChangeFiled) => ({
  type: CHANGE_FIELD_LOGIN,
  form,
  key,
  value,
});

export const changeFieldRegister = ({ form, key, value }: IChangeFiled) => ({
  type: CHANGE_FIELD_REGISTER,
  form,
  key,
  value,
});

export const initializeLoginForm = (form: string) => ({
  type: INITIALIZE_LOGIN_FORM,
  form,
});
export const initializeRegisterForm = (form: string) => ({
  type: INITIALIZE_REGISTER_FORM,
  form,
});

export const login = ({ email, password }: IAuth) => ({
  type: LOGIN,
  email,
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

export const register = ({
  email,
  password,
  phoneNum,
  birthday,
  userId,
  sex,
}: IRegister) => ({
  type: REGISTER,
  email,
  password,
  phoneNum,
  birthday,
  userId,
  sex,
});

export const registerSuccess = (payload: string) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFailure = (payload: string) => ({
  type: REGISTER_FAILURE,
  payload,
});

type AuthAction =
  | ReturnType<typeof changeFieldLogin>
  | ReturnType<typeof changeFieldRegister>
  | ReturnType<typeof initializeLoginForm>
  | ReturnType<typeof initializeRegisterForm>
  | ReturnType<typeof login>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof register>
  | ReturnType<typeof registerSuccess>
  | ReturnType<typeof registerFailure>;

// saga ??????
function* registerSaga(action: ReturnType<typeof register>) {
  yield put(startLoading(REGISTER));
  try {
    const { email, password, phoneNum, birthday, userId, sex } = action;
    const response: AxiosResponse = yield call(authApi.register, {
      email,
      password,
      phoneNum,
      birthday,
      userId,
      sex,
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
    const { email, password } = action;
    const response: AxiosResponse = yield call(authApi.login, {
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

// SAGA ??????
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

type AuthState = {
  register: {
    userId: string | null;
    password: string | null;
    passwordConfirm: string | null;
    email: string | null;
    phoneNum: string | null;
    birthday: string | null;
    sex: string | null;
  };
  login: {
    email: string | null;
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
    birthday: null,
    phoneNum: null,
    sex: null,
  },
  login: {
    email: null,
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
    case CHANGE_FIELD_LOGIN:
      return {
        ...state,
        [action.form]: {
          ...state['login'],
          [action.key]: action.value,
        },
      };
    case CHANGE_FIELD_REGISTER:
      return {
        ...state,
        [action.form]: {
          ...state['register'],
          [action.key]: action.value,
        },
      };
    case INITIALIZE_LOGIN_FORM:
      return {
        ...state,
        [action.form]: initialStete['login'],
        authError: null,
      };
    case INITIALIZE_REGISTER_FORM:
      return {
        ...state,
        [action.form]: initialStete['login'],
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

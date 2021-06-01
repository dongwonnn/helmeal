import {IUser} from '../types/IUser'

// 액션 타입 정의
const LOGIN = 'auth/LOGIN' as const;
const LOGOUT = 'auth/LOGOUT' as const;
const CHECK = 'auth/CHECK' as const;

// 액션 생성 함수
// 보류
export const login = () => ({
  type: LOGIN,
});

export const logout = (data: IUser[]) => ({
  type: LOGOUT,
  data,
});

export const check = (data: IUser[]) => ({
  type: CHECK,
  data,
});

// 액션 타입
type AuthAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>
  | ReturnType<typeof check>;

// 초기값 타입
type AuthState = {
  user: IUser[] ;
};

// 초기값 설정
const initialStete: AuthState= {
  user: [],
};

// 리듀서 작성
function auth(state: AuthState= initialStete, action:AuthAction) : AuthState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        // email, password 등..
      };
    case LOGOUT:
      return {
        ...state,
        user: [],
      };
    case CHECK:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
}

export default auth;

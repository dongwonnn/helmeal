// 액션 타입 정의
const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';
const CHECK = 'auth/CHECK';

// 액션 생성 함수
export const login = (data) => ({
  type: LOGIN,
  data,
});

export const logout = (data) => ({
  type: LOGOUT,
  data,
});

export const check = (data) => ({
  type: CHECK,
  data,
});

// 초기값 설정
const initialStete = {
  user: null,
};

// 리듀서 작성
function auth(state = initialStete, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        // email, password 등..
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
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

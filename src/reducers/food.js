// 액션 타입 정의
const SET_MEAL_INFO = 'food/SET_MEAL_INFO';
const SET_SNACK_INFO = 'food/SET_SNACK_INFO';

// 액션 생성 함수
export const currentMealInfo = (data) => ({
  type: SET_MEAL_INFO,
  data,
});
export const currentSnackInfo = (data) => ({
  type: SET_SNACK_INFO,
  data,
});

// 초기값 설정
const initialStete = {
  totalMealInfo: null,
  totalSnackInfo: null,
};

// 리듀서 작성
function food(state = initialStete, action) {
  switch (action.type) {
    case SET_MEAL_INFO:
      return {
        ...state,
        totalMealInfo: action.data,
      };
    case SET_SNACK_INFO:
      return {
        ...state,
        totalSnackInfo: action.data,
      };
    default:
      return state;
  }
}

export default food;

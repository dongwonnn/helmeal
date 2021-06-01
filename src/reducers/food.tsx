import { IProductItem } from '../types/ITotalMealInfo';
import { ITotalSnackInfo } from '../types/ITotalSnackInfo';

// 액션 타입 정의
const SET_MEAL_INFO = 'food/SET_MEAL_INFO' as const;
const SET_SNACK_INFO = 'food/SET_SNACK_INFO' as const;

// 액션 생성 함수
export const currentMealInfo = (data: IProductItem[]) => ({
  type: SET_MEAL_INFO,
  data,
});
export const currentSnackInfo = (data: ITotalSnackInfo[]) => ({
  type: SET_SNACK_INFO,
  data,
});

// 액션 타입
type FoodAction =
  | ReturnType<typeof currentMealInfo>
  | ReturnType<typeof currentSnackInfo>

// 초기값 타입
type FoodState = {
  totalMealInfo:  IProductItem[];
  totalSnackInfo:  ITotalSnackInfo[];
};

// 초기값 설정
const initialStete = {
  totalMealInfo: [],
  totalSnackInfo: [],
};

// 리듀서 작성
function food(state:FoodState = initialStete, action:FoodAction) : FoodState {
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

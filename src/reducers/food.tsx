import { ITotalMealInfo } from '../types/ITotalMealInfo';
import { ITotalSnackInfo } from '../types/ITotalSnackInfo';

const SET_MEAL_INFO = 'food/SET_MEAL_INFO' as const;
const SET_MEAL_CATEGORY_INFO = 'food/SET_MEAL_CATEGORY_INFO' as const;
const SET_SNACK_INFO = 'food/SET_SNACK_INFO' as const;

export const currentMealInfo = (data: ITotalMealInfo[]) => ({
  type: SET_MEAL_INFO,
  data,
});

export const categoryMealInfo = (data: ITotalMealInfo[]) => ({
  type: SET_MEAL_CATEGORY_INFO,
  data,
});

export const currentSnackInfo = (data: ITotalSnackInfo[]) => ({
  type: SET_SNACK_INFO,
  data,
});

type FoodAction =
  | ReturnType<typeof currentMealInfo>
  | ReturnType<typeof categoryMealInfo>
  | ReturnType<typeof currentSnackInfo>;

type FoodState = {
  totalMealInfo: ITotalMealInfo[];
  sortedMealInfo: ITotalMealInfo[];
  totalSnackInfo: ITotalSnackInfo[];
};

const initialStete = {
  totalMealInfo: [],
  sortedMealInfo: [],
  totalSnackInfo: [],
};

function food(state: FoodState = initialStete, action: FoodAction): FoodState {
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
    case SET_MEAL_CATEGORY_INFO:
      return {
        ...state,
        sortedMealInfo: action.data,
      };
    default:
      return state;
  }
}

export default food;

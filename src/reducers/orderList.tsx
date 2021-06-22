import { IOrderList } from '../types/IOrderList';

// 액션 타입 정의
const SET_ORDER_LIST = 'orderList/SET_ORDER_LIST' as const;

// 액션 생성 함수
export const setOrderList = (data: IOrderList[]) => ({
  type: SET_ORDER_LIST,
  data,
});

// 액션 타입
type OrderAction = ReturnType<typeof setOrderList>;

// 초기값 타입
type OrderState = {
  orderList: IOrderList[];
};

// 초기값 설정
const initialStete: OrderState = {
  orderList: [],
};

// 리듀서 작성
function order(
  state: OrderState = initialStete,
  action: OrderAction,
): OrderState {
  switch (action.type) {
    case SET_ORDER_LIST:
      console.log(state.orderList);
      return {
        ...state,
        orderList: state.orderList.concat(action.data).reverse(),
      };
    default:
      return state;
  }
}

export default order;

import { IOrderList } from '../types/IOrderList';

const SET_ORDER_LIST = 'orderList/SET_ORDER_LIST' as const;

export const setOrderList = (data: IOrderList[]) => ({
  type: SET_ORDER_LIST,
  data,
});

type OrderAction = ReturnType<typeof setOrderList>;

type OrderState = {
  orderList: IOrderList[];
};

const initialStete: OrderState = {
  orderList: [],
};

function order(
  state: OrderState = initialStete,
  action: OrderAction,
): OrderState {
  switch (action.type) {
    case SET_ORDER_LIST:
      return {
        ...state,
        orderList: state.orderList.concat(action.data).reverse(),
      };
    default:
      return state;
  }
}

export default order;

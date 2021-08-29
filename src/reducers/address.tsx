const SET_MAIN_ADDRESS = 'address/SET_ADDRESS' as const;
const SET_DETAIL_ADDRESS = 'address/SET_DETAIL_ADDRESS' as const;

export const setMainAddress = (data: string) => ({
  type: SET_MAIN_ADDRESS,
  data,
});
export const setDetailAddress = (data: string) => ({
  type: SET_DETAIL_ADDRESS,
  data,
});

type AddressAction =
  | ReturnType<typeof setMainAddress>
  | ReturnType<typeof setDetailAddress>;

type AddressState = {
  mainAddress: string;
  detailAddress: string;
};

const initialStete = {
  mainAddress: '',
  detailAddress: '',
};

function address(
  state: AddressState = initialStete,
  action: AddressAction,
): AddressState {
  switch (action.type) {
    case SET_MAIN_ADDRESS:
      return {
        ...state,
        mainAddress: action.data,
      };
    case SET_DETAIL_ADDRESS:
      return {
        ...state,
        detailAddress: action.data,
      };
    default:
      return state;
  }
}

export default address;

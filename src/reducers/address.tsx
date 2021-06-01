// 액션 타입 정의
const SET_MAIN_ADDRESS = 'address/SET_ADDRESS' as const;
const SET_DETAIL_ADDRESS = 'address/SET_DETAIL_ADDRESS' as const;

// 액션 생성 함수
export const setMainAddress = (data:string) => ({
  type: SET_MAIN_ADDRESS,
  data,
});
export const setDetailAddress = (data:string) => ({
  type: SET_DETAIL_ADDRESS,
  data,
});

// 액션 타입
type AddressAction =
  | ReturnType<typeof setMainAddress>
  | ReturnType<typeof setDetailAddress>

  // 초기값 타입
type AddressState = {
  mainAddress: string;
  detailAddress: string;
};

// 초기값 설정
const initialStete = {
  mainAddress: '',
  detailAddress: '',
};

// 리듀서 작성
function address(state:AddressState = initialStete, action:AddressAction):AddressState {
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

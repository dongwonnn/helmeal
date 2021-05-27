// 액션 타입 정의
const SET_MAIN_ADDRESS = 'address/SET_ADDRESS';
const SET_DETAIL_ADDRESS = 'address/SET_DETAIL_ADDRESS';

// 액션 생성 함수
export const setMainAddress = (data) => ({
  type: SET_MAIN_ADDRESS,
  data,
});
export const setDetailAddress = (data) => ({
  type: SET_DETAIL_ADDRESS,
  data,
});

// 초기값 설정
const initialStete = {
  mainAddress: null,
  detailAddress: null,
};

// 리듀서 작성
function address(state = initialStete, action) {
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

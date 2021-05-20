// 액션 타입 정의
const SET_PROTEIN_INFO = 'option/SET_PROTEIN_INFO ';
const SET_DATE_INFO = 'option/ SET_DATE_INFO';
const SET_DATE_PRICE = 'option/SET_DATE_PRICE';
const SET_SUBSCRIBE_INFO = 'option/SET_SUBSCRIBE_INFO';
const SET_SUBSCRIBE_PRICE = 'option/SET_SUBSCRIBE_PRIC';

// 액션 생성 함수

export const setProteinInfo = (data) => ({
  type: SET_PROTEIN_INFO,
  data,
});
export const setDateInfo = (data) => ({
  type: SET_DATE_INFO,
  data,
});
export const setDatePrice = (data) => ({
  type: SET_DATE_PRICE,
  data,
});
export const setSubscribeInfo = (data) => ({
  type: SET_SUBSCRIBE_INFO,
  data,
});
export const setSubscribePrice = (data) => ({
  type: SET_SUBSCRIBE_PRICE,
  data,
});

// 초기값 설정
const initialStete = {
  proteinInfo: '',
  dateInfo: '',
  dateInfoPrice: '',
  subscribeTerm: '',
  subscribeTermPrice: '',
};

// 리듀서 작성
function option(state = initialStete, action) {
  switch (action.type) {
    case SET_PROTEIN_INFO:
      return {
        ...state,
        proteinInfo: action.data,
      };
    case SET_DATE_INFO:
      return {
        ...state,
        dateInfo: action.data,
      };
    case SET_DATE_PRICE:
      return {
        ...state,
        dateInfoPrice: action.data,
      };
    case SET_SUBSCRIBE_INFO:
      return {
        ...state,
        subscribeTerm: action.data,
      };
    case SET_SUBSCRIBE_PRICE:
      return {
        ...state,
        subscribeTermPrice: action.data,
      };
    default:
      return state;
  }
}

export default option;

// 액션 타입 정의
const SET_PROTEIN_INFO = 'option/SET_PROTEIN_INFO' as const;
const SET_DATE_INFO = 'option/ SET_DATE_INFO' as const;
const SET_DATE_PRICE = 'option/SET_DATE_PRICE' as const;
const SET_SUBSCRIBE_INFO = 'option/SET_SUBSCRIBE_INFO' as const;
const SET_SUBSCRIBE_PRICE = 'option/SET_SUBSCRIBE_PRIC' as const;

// 액션 생성 함수

export const setProteinInfo = (data: string) => ({
  type: SET_PROTEIN_INFO,
  data,
});
export const setDateInfo = (data: string) => ({
  type: SET_DATE_INFO,
  data,
});
export const setDatePrice = (data: string) => ({
  type: SET_DATE_PRICE,
  data,
});
export const setSubscribeInfo = (data: string) => ({
  type: SET_SUBSCRIBE_INFO,
  data,
});
export const setSubscribePrice = (data: string) => ({
  type: SET_SUBSCRIBE_PRICE,
  data,
});

// 액션 타입
type OptionAction =
  | ReturnType<typeof setProteinInfo>
  | ReturnType<typeof setDateInfo>
  | ReturnType<typeof setDatePrice>
  | ReturnType<typeof setSubscribeInfo>
  | ReturnType<typeof setSubscribePrice>;

// 초기값 타입
type OptionState = {
  proteinInfo: string;
  dateInfo: string;
  dateInfoPrice: string;
  subscribeTerm: string;
  subscribeTermPrice: string;
};

// 초기값 설정
const initialStete = {
  proteinInfo: '',
  dateInfo: '',
  dateInfoPrice: '',
  subscribeTerm: '',
  subscribeTermPrice: '',
};

// 리듀서 작성
function option(state:OptionState = initialStete, action:OptionAction):OptionState {
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

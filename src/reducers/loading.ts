const START_LOADING = 'loading/START_LOADING' as const;
const FINISH_LOADING = 'loading/FINISH_LOADING' as const;

export const startLoading = (requestType: string) => ({
  type: START_LOADING,
  requestType,
});
export const finishLoding = (requestType: string) => ({
  type: FINISH_LOADING,
  requestType,
});

// 액션 타입
type LoadingAction =
  | ReturnType<typeof startLoading>
  | ReturnType<typeof finishLoding>;

const initialStete = {};

function loading(state = initialStete, action: LoadingAction) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.requestType]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.requestType]: false,
      };
    default:
      return state;
  }
}

export default loading;

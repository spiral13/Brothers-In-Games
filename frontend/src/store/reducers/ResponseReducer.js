/**
 * Initial State
 */
const initialState = {
  textArea: '',
};

/**
 * Types
 */
export const GET_RESPONSE = 'GET_RESPONSE';
const CHANGE_AREA = 'CHANGE_AREA';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RESPONSE:
      return {
        ...state,
      };

    case CHANGE_AREA:
      return {
        ...state,
        textArea: action.value,
      };

    default:
      return state;
  }
};
/**
 * Action Creators
 */
export const getResponse = () => ({
  type: GET_RESPONSE,
});

export const changeArea = value => ({
  type: CHANGE_AREA,
  value,
});

/**
 * Export
 */
export default reducer;

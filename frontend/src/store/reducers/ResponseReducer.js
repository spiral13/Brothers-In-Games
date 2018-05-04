/**
 * Initial State
 */
const initialState = {
  textArea: '',
  popup: false,
  response: {
    status: false,
    id: 0,
    content: '',
  },
};

/**
 * Types
 */
export const GET_RESPONSE = 'GET_RESPONSE';
const CHANGE_AREA = 'CHANGE_AREA';
const SHOW_RESPONSE = 'SHOW_RESPONSE';
const HIDE_RESPONSE = 'HIDE_RESPONSE';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_RESPONSE: {
      console.log(action);
      return {
        ...state,
        popup: true,
        response: {
          status: action.datas.data.status,
          id: action.datas.data.message[0].id,
          content: action.datas.data.message[0].content,
        },
      };
    }

    case HIDE_RESPONSE:
      return {
        ...state,
        popup: false,
      };

    case GET_RESPONSE:
      return {
        ...state,
        textArea: '',
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

export const showResponse = datas => ({
  type: SHOW_RESPONSE,
  datas,
});

export const hideResponse = () => ({
  type: HIDE_RESPONSE,
});

/**
 * Export
 */
export default reducer;

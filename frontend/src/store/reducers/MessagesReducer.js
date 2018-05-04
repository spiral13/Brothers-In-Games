/**
 * Initial State
 */
const initialState = {
  receivedMails: [{}],
};

/**
 * Types
 */
export const GET_ALL_RECEIVED_MESSAGES = 'GET_ALL_RECEIVED_MESSAGES';
const ADD_MESSAGES = 'ADD_MESSAGES';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_RECEIVED_MESSAGES:
      return {
        ...state,
      };

    case ADD_MESSAGES:
      return {
        ...state,
        receivedMails: action.messages.data,
      };

    default:
      return state;
  }
};
/**
 * Action Creators
 */

export const receivedMessages = () => ({
  type: GET_ALL_RECEIVED_MESSAGES,
});

export const addMessages = messages => ({
  type: ADD_MESSAGES,
  messages,
});

/**
 * Export
 */
export default reducer;

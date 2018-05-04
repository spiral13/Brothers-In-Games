/**
 * Initial State
 */
const initialState = {
  receivedMails: [{}],
  sendMails: [{}],
};

/**
 * Types
 */
export const GET_ALL_RECEIVED_MESSAGES = 'GET_ALL_RECEIVED_MESSAGES';
const ADD_MESSAGES = 'ADD_MESSAGES';
export const GET_ALL_SEND_MESSAGES = 'GET_ALL_SEND_MESSAGES';
const ADD_SENDED_MESSAGES = 'ADD_SENDED_MESSAGES';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_RECEIVED_MESSAGES:
      return {
        ...state,
      };

    case GET_ALL_SEND_MESSAGES:
      return {
        ...state,
      };

    case ADD_MESSAGES:
      return {
        ...state,
        receivedMails: action.messages.data,
      };

    case ADD_SENDED_MESSAGES:
      return {
        ...state,
        sendMails: action.messages.data,
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

export const sendedMessages = () => ({
  type: GET_ALL_SEND_MESSAGES,
});

export const sendReceiveMessages = messages => ({
  type: ADD_SENDED_MESSAGES,
  messages,
});

/**
 * Export
 */
export default reducer;

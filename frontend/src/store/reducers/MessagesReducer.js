/**
 * Initial State
 */
const initialState = {
  receivedMails: [{}],
  sendMails: [{}],
  selectedMail: [{}],
};

/**
 * Types
 */
export const GET_ALL_RECEIVED_MESSAGES = 'GET_ALL_RECEIVED_MESSAGES';
const ADD_MESSAGES = 'ADD_MESSAGES';
export const GET_ALL_SEND_MESSAGES = 'GET_ALL_SEND_MESSAGES';
const ADD_SENDED_MESSAGES = 'ADD_SENDED_MESSAGES';
export const GET_ONE_MESSAGE = 'GET_ONE_MESSAGE';
const ADD_SELECTED_MESSAGE = 'ADD_SELECTED_MESSAGE';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ONE_MESSAGE:
      return {
        ...state,
      };

    case ADD_SELECTED_MESSAGE:
      return {
        ...state,
        selectedMail: action.message.data,
      };

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

export const getOneMessage = () => ({
  type: GET_ONE_MESSAGE,
});

export const addMessageSelected = message => ({
  type: ADD_SELECTED_MESSAGE,
  message,
});
/**
 * Export
 */
export default reducer;

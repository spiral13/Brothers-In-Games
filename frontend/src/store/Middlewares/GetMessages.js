// Npm import
import axios from 'axios';

// Local import
import { GET_ALL_RECEIVED_MESSAGES, GET_ALL_SEND_MESSAGES, addMessages, sendReceiveMessages } from 'frontend/src/store/reducers/MessagesReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_ALL_RECEIVED_MESSAGES: {
      // eslint-disable-next-line
      axios.get(Routing.generate('get_list_received_messages')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addMessages(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ALL_SEND_MESSAGES: {
      axios.get(Routing.generate('get_list_sended_messages')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(sendReceiveMessages(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    default:
      break;
  }

  // On passe au voisin
  next(action);
};

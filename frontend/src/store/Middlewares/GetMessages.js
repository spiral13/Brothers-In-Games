// Npm import
import axios from 'axios';

// Local import
import { GET_ALL_RECEIVED_MESSAGES, addMessages } from 'frontend/src/store/reducers/MessagesReducer';
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

    default:
      break;
  }

  // On passe au voisin
  next(action);
};

// Npm import
import axios from 'axios';

// Local import
import { GET_ALL_RECEIVED_MESSAGES, GET_ALL_SEND_MESSAGES, GET_ONE_MESSAGE, addMessageSelected, addMessages, sendReceiveMessages } from 'frontend/src/store/reducers/MessagesReducer';
import { changeLoading } from 'frontend/src/store/reducers/LoadingReducer';
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
        store.dispatch(changeLoading('loadingReceiveMessages'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ALL_SEND_MESSAGES: {
      axios.get(Routing.generate('get_list_sended_messages')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(sendReceiveMessages(response));
        store.dispatch(changeLoading('loadingSendedMessages'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ONE_MESSAGE: {
      const url = window.location.pathname.split('/');
      const formData = new FormData();
      formData.append('id', url[3]);
      axios.post(Routing.generate('get_messages'), formData).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addMessageSelected(response));
        store.dispatch(changeLoading('loadingOneMessage'));
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

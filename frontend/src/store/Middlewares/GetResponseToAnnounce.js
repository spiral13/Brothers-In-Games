// Npm import
import axios from 'axios';

// Local import
import { GET_RESPONSE } from 'frontend/src/store/reducers/ResponseReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_RESPONSE: {
      const formData = new FormData();
      formData.append('message', store.getState().ResponseReducer.textArea);
      // eslint-disable-next-line
      axios.post(Routing.generate('mail_list_send'), formData).then((response) => {
        console.log(response);
        // Ici, faire un dispatch.
        // store.dispatch(sendResponse(response));
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

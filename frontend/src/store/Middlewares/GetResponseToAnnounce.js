// Npm import
import axios from 'axios';

// Local import
import { GET_RESPONSE, showResponse } from 'frontend/src/store/reducers/ResponseReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_RESPONSE: {
      const formData = new FormData();
      formData.append('content', store.getState().ResponseReducer.textArea);
      formData.append('id', store.getState().AnnouncementsReducer.profileAnnounce[0].user.id);
      // eslint-disable-next-line
      axios.post(Routing.generate('message_send'), formData).then((response) => {
        store.dispatch(showResponse(response));
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

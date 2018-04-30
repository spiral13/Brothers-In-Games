// Npm import
import axios from 'axios';

// Local import
import { GET_ANNOUNCEMENTS, showAnnouncements } from 'frontend/src/store/reducers/AnnouncementsReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_ANNOUNCEMENTS: {
      // eslint-disable-next-line
      axios.get(Routing.generate('announcements_list_game')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(showAnnouncements(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }
  }

  // On passe au voisin
  next(action);
};

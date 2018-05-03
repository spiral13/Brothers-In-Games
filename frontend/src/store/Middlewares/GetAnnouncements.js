// Npm import
import axios from 'axios';

// Local import
import { GET_ALL_ANNOUNCEMENTS, GET_ANNOUNCEMENT_SELECTED, GET_PROFILE_ANNOUNCE, addProfileAnnounce, showAnnouncements } from 'frontend/src/store/reducers/AnnouncementsReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_ALL_ANNOUNCEMENTS: {
      // eslint-disable-next-line
      axios.get(Routing.generate('get_all_announcement')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(showAnnouncements(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ANNOUNCEMENT_SELECTED: {
      const url = window.location.search.split('?slug=');
      const formData = new FormData();
      formData.append('slug', url[1]);
      // eslint-disable-next-line
      axios.post(Routing.generate('get_announcement_by_game'), formData).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(showAnnouncements(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_PROFILE_ANNOUNCE: {
      const url = window.location.pathname.split('/');
      const formData = new FormData();
      formData.append('id', url[3]);
      /* eslint-disable-next-line */
      axios.post(Routing.generate('get_announcement'), formData).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addProfileAnnounce(response));
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

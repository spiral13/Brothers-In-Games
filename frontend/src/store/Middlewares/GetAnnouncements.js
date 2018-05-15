// Npm import
import axios from 'axios';

// Local import
import { changeLoading } from 'frontend/src/store/reducers/LoadingReducer';
import {
  GET_ALL_ANNOUNCEMENTS,
  GET_ANNOUNCEMENT_SELECTED,
  GET_PROFILE_ANNOUNCE,
  GET_ALL_MY_ANNOUNCEMENTS,
  addProfileAnnounce,
  showAnnouncements,
  showMyAnnouncements,
} from 'frontend/src/store/reducers/AnnouncementsReducer';
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
        store.dispatch(changeLoading('loadingAnnouncements'));
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
        store.dispatch(changeLoading('loadingAnnouncements'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ALL_MY_ANNOUNCEMENTS: {
      axios.get(Routing.generate('get_all_user_announcement')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(showMyAnnouncements(response));
        store.dispatch(changeLoading('loadingMyAnnouncements'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_PROFILE_ANNOUNCE: {
      const url = window.location.pathname.split('/');
      const formData = new FormData();
      formData.append('id', url[2]);
      console.log(formData);
      /* eslint-disable-next-line */
      axios.post(Routing.generate('get_announcement'), formData).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addProfileAnnounce(response));
        store.dispatch(changeLoading('loadingProfileAnnounce'));
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

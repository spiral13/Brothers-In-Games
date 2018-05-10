// Npm import
import axios from 'axios';

// Local import
import { SUBMIT_CHANGES, SUBMIT_CHANGES_PRIVATE_INFORMATION } from 'frontend/src/store/reducers/ProfileReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case SUBMIT_CHANGES: {
      const formData = new FormData();
      formData.append('username', store.getState().ProfileReducer.user.username);
      formData.append('firstname', store.getState().ProfileReducer.user.firstname);
      axios.post(Routing.generate('my_profile_update'), formData).then((response) => {
        console.log(response);
        // store.dispatch(addAllGames(response));
        // store.dispatch(changeLoading('loadingGames'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case SUBMIT_CHANGES_PRIVATE_INFORMATION: {
      const formData = new FormData();
      formData.append('password', store.getState().ProfileReducer.user.password);
      formData.append('mail', store.getState().ProfileReducer.user.mail);
      axios.post(Routing.generate('account_update'), formData).then((response) => {
        console.log(response);
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

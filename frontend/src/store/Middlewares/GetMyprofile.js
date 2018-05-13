// Npm import
import axios from 'axios';

// Local import
import { GET_PROFILE_INFORMATION, GET_ACCOUNT_INFORMATION, SUBMIT_CHANGES, SUBMIT_CHANGES_PRIVATE_INFORMATION, addUserProfileInformation, addUserAccountInformation } from 'frontend/src/store/reducers/ProfileReducer';
import { changeLoading } from 'frontend/src/store/reducers/LoadingReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_PROFILE_INFORMATION: {
      console.log('coco');
      // eslint-disable-next-line
      axios.get(Routing.generate('get_profile')).then((response) => {
        store.dispatch(addUserProfileInformation(response));
        store.dispatch(changeLoading('loadingUserProfile'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ACCOUNT_INFORMATION: {
      console.log('coco');
      // eslint-disable-next-line
      axios.get(Routing.generate('get_user')).then((response) => {
        store.dispatch(addUserAccountInformation(response));
        store.dispatch(changeLoading('loadingUserAccount'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case SUBMIT_CHANGES: {
      const formData = new FormData();
      formData.append('username', store.getState().ProfileReducer.profile.username);
      formData.append('firstname', store.getState().ProfileReducer.profile.firstname);
      axios.post(Routing.generate('my_profile_update'), formData).then((response) => {
        console.log(response);
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

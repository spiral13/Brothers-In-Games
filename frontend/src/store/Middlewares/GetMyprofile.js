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
      // eslint-disable-next-line
      axios.get(Routing.generate('get_profile')).then((response) => {
        Object.keys(response.data).forEach((oneData) => {
          if (response.data[oneData] === null) {
            response.data.oneData = '';
          }
        });
        store.dispatch(addUserProfileInformation(response));
        store.dispatch(changeLoading('loadingUserProfile'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ACCOUNT_INFORMATION: {
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
      formData.append('firstname', store.getState().ProfileReducer.profileInformationChange.firstname);
      formData.append('image', store.getState().ProfileReducer.profileInformationChange.image);
      formData.append('gender', store.getState().ProfileReducer.profileInformationChange.gender);
      formData.append('description', store.getState().ProfileReducer.profileInformationChange.description);
      formData.append('birthday', store.getState().ProfileReducer.profileInformationChange.birthday);
      // eslint-disable-next-line
      axios.post(Routing.generate('my_profile_update'), formData).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case SUBMIT_CHANGES_PRIVATE_INFORMATION: {
      const formData = new FormData();
      formData.append('username', store.getState().ProfileReducer.profileInformationChange.username);
      formData.append('password', store.getState().ProfileReducer.profileInformationChange.password);
      formData.append('mail', store.getState().ProfileReducer.profileInformationChange.mail);
      // eslint-disable-next-line
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

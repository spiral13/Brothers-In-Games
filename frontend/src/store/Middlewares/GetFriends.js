// Npm import
import axios from 'axios';

// Local import
import { GET_FRIENDS, DELETE_FRIEND, addFriends } from 'frontend/src/store/reducers/FriendsReducer';
import { changeLoading } from 'frontend/src/store/reducers/LoadingReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_FRIENDS: {
      // eslint-disable-next-line
      axios.get(Routing.generate('getUserFriends')).then((response) => {
        store.dispatch(addFriends(response));
        store.dispatch(changeLoading('loadingFriends'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case DELETE_FRIEND: {
      const formData = new FormData();
      formData.append('id', store.getState().FriendsReducer.friendToDelete);
      // eslint-disable-next-line
      axios.post(Routing.generate('removeFriend'), formData).catch((error) => {
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

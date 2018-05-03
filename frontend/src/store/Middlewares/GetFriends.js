// Npm import
import axios from 'axios';

// Local import
import { GET_FRIENDS, addFriends } from 'frontend/src/store/reducers/FriendsReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_FRIENDS: {
      // eslint-disable-next-line
      axios.get(Routing.generate('getUserFriends')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addFriends(response));
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

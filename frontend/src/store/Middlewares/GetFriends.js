// Npm import
import axios from 'axios';

// Local import
import { GET_FRIENDS, DELETE_FRIEND, ADD_ONE_FRIEND, addFriends, showOneFriend } from 'frontend/src/store/reducers/FriendsReducer';
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
        store.dispatch(changeLoading('loadingFriends'));
        console.log(error);
      });
      break;
    }

    case DELETE_FRIEND: {
      const formData = new FormData();
      formData.append('id', store.getState().FriendsReducer.friendToDelete);
      // eslint-disable-next-line
      axios.post(Routing.generate('removeFriend'), formData).then((response) => {
        alert('La suppression a bien été effectué');
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case ADD_ONE_FRIEND: {
      const formData = new FormData();
      formData.append('username', store.getState().FriendsReducer.addOneFriend);
      // eslint-disable-next-line
      axios.post(Routing.generate('addFriend'), formData).then((response) => {
        if (response.data.status) {
          store.dispatch(showOneFriend(response));
          return alert(`Votre ami ${response.data.user[0].username} a bien été ajouté à votre liste d'amis`);
        }
        alert(response.data.message);
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

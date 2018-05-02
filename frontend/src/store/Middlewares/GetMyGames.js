// Npm import
import axios from 'axios';

// Local import
import { GET_ALL_MY_GAMES, addAllMyGames } from 'frontend/src/store/reducers/MyGamesReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_ALL_MY_GAMES: {
      // eslint-disable-next-line
      axios.get(Routing.generate('get_user_games')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addAllMyGames(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }
  }

  // On passe au voisin
  next(action);
};

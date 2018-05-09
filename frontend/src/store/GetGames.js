// Npm import
import axios from 'axios';

// Local import
import { changeLoading } from 'frontend/src/store/reducers/LoadingReducer';
import { GET_GAMES, addAllGames } from './reducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_GAMES: {
      // eslint-disable-next-line
      axios.get(Routing.generate('get_all_games')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addAllGames(response));
        store.dispatch(changeLoading('loadingGames'));
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

import axios from 'axios';

import { GET_GAMES, addAllGames } from './reducer';
/*
 * Middleware
 */
export default store => next => (action) => {

  // Code
  switch (action.type) {
    case GET_GAMES: {
      axios.get(Routing.generate('get_all_games')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addAllGames(response));
      }).catch((error) => {
        console.log(error);
      });
    }
    break;
  }

  // On passe au voisin
  next(action);
};

import axios from 'axios';

import { GET_GAMES, ADD_GAMES } from './reducer';
/*
 * Middleware
 */
export default store => next => (action) => {

  // Code
  switch (action.type) {
    case GET_GAMES: {
      console.log('GET_GAMES');
    }

    case ADD_GAMES: {
      console.log('ADD_GAMES');
    }
    break;
  }

  // On passe au voisin
  next(action);
};

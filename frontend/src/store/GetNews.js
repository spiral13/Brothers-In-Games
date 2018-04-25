
import axios from 'axios';
import { GET_NEWS } from './reducer';
/*
 * Middleware
 */
export default store => next => (action) => {

  // Code
  switch (action.type) {
    case GET_NEWS: {
      console.log('GET_NEWS');
    }
    break;
  }

  // On passe au voisin
  next(action);
};


import axios from 'axios';
import { GET_NEWS, addNews } from './reducer';
/*
 * Middleware
 */
export default store => next => (action) => {

  // Code
  switch (action.type) {
    case GET_NEWS: {
      axios.get(Routing.generate('get_home_articles')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addNews(response));
      }).catch((error) => {
        console.log(error);
      });
    }
    break;
  }

  // On passe au voisin
  next(action);
};


import axios from 'axios';
import { GET_NEWS, addNews, GET_ACTUS, addActus } from './reducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_NEWS: {
      // eslint-disable-next-line
      axios.get(Routing.generate('get_home_articles')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addNews(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ACTUS: {
      // eslint-disable-next-line
      axios.get(Routing.generate('get_sidebar_articles')).then((response) => {
        console.log(response);
        // Ici, faire un dispatch.
        store.dispatch(addActus(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    default:
      return;
  }

  // On passe au voisin
  next(action);
};

// Npm import
import axios from 'axios';

// Local import
import { GET_ARTICLE, addArticle } from 'frontend/src/store/reducers/ArticleReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_ARTICLE: {
      // eslint-disable-next-line
      axios.get(Routing.generate('article_show')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addArticle(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }
  }

  // On passe au voisin
  next(action);
};

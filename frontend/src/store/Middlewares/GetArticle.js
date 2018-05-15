// Npm import
import axios from 'axios';

// Local import
import { GET_ARTICLE, addArticle } from 'frontend/src/store/reducers/ArticleReducer';
import { changeLoading } from 'frontend/src/store/reducers/LoadingReducer';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_ARTICLE: {
      const url = window.location.pathname.split('/');
      const formData = new FormData();
      formData.append('id', url[2]);
      formData.append('slug', url[3]);
      // eslint-disable-next-line
      axios.post(Routing.generate('get_article'), formData).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addArticle(response));
        store.dispatch(changeLoading('loadingArticle'));
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

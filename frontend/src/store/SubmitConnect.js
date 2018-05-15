// Npm import
import axios from 'axios';

// Local import
import { SUBMIT_CONNECT, SIGNUP_SUBMIT, redirect } from './reducer';

/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case SUBMIT_CONNECT: {
      // J'assigne les donnée que je veux a data
      const data = store.getState().reducer.signin;
      // Je crée un objet FormData
      const formData = new FormData();
      // Je boucle pour y stocker tout à l'interieur de l'objet FormData
      for (var key in data) {
        formData.append(key, data[key]);
      }
      // eslint-disable-next-line
      axios.post(Routing.generate('login'), formData).then((response) => {
        console.warn('Requête de connexion envoyée');
        if (response.data.success) {
          return store.dispatch(redirect('/home'));
        }
        alert('Votre identifiant ou mot de passe est incorrect');
      }).catch((error) => {
        console.error(`Echec de l'envoie de la requête :${error}`);
      });
      break;
    }

    case SIGNUP_SUBMIT: {
      // J'assigne les donnée que je veux a data
      const data = store.getState().reducer.signup;
      // Je crée un objet FormData
      const formData = new FormData();
      // Je boucle pour y stocker tout à l'interieur de l'objet FormData
      for (var key in data) {
        formData.append(key, data[key]);
      }
      // Et j'envoie la donnée
      // eslint-disable-next-line
      axios.post(Routing.generate('signup'), formData).then((response) => {
        console.warn('Requête inscription envoyée');
      }).catch((error) => {
        console.error(`Echec de l'envoie de la requête :${error}`);
      });
      break;
    }

    default:
      break;
  }

  // On passe au voisin
  next(action);
};

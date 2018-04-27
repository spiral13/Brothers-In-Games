// Npm import
import axios from 'axios';

// Local import
import { SUBMIT_CONNECT, SIGNUP_SUBMIT } from './reducer';

/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case SUBMIT_CONNECT: {
      // J'assigne les donnée que je veux a data
      const data = store.getState().signin;
      // Je crée un objet FormData
      const formData = new FormData();
      // Je boucle pour y stocker tout à l'interieur de l'objet FormData
      for (var key in data) {
        formData.append(key, data[key]);
      }
      axios.post(Routing.generate('login'), formData).then((response) => {
        console.warn('Requête de connexion envoyée');
      }).catch((error) => {
        console.error(`Echec de l'envoie de la requête :${error}`);
      });
      break;
    }

    case SIGNUP_SUBMIT: {
      // J'assigne les donnée que je veux a data
      const data = store.getState().signup;
      // Je crée un objet FormData
      const formData = new FormData();
      // Je boucle pour y stocker tout à l'interieur de l'objet FormData
      for (var key in data) {
        formData.append(key, data[key]);
      }

      // Et j'envoie la donnée
      axios.post(Routing.generate('signup'), formData).then((response) => {
        console.warn('Requête inscription envoyée');
      }).catch((error) => {
        console.error(`Echec de l'envoie de la requête :${error}`);
      });
      break;
    }

    default:
      return;
  }

  // On passe au voisin
  next(action);
};

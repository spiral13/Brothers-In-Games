
import { SUBMIT_CONNECT, SIGNUP_SUBMIT } from './reducer';
import axios from 'axios';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case SUBMIT_CONNECT: {
      // J'assigne les donnée que je veux a data
      var data = store.getState().signin;
      // Je crée un objet FormData
      var formData = new FormData();
      // Je boucle pour y stocker tout à l'interieur de l'objet FormData
      for (var key in data) {
        console.log(key, data[key]);
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
      var data = store.getState().signup;
      // Je crée un objet FormData
      var formData = new FormData();
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
  }

  // On passe au voisin
  next(action);
};

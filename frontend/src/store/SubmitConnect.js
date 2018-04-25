
import { SUBMIT_CONNECT, SIGNUP_SUBMIT } from './reducer';
import axios from 'axios';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case SUBMIT_CONNECT: {
      axios.post(Routing.generate('login'), {
        params: {
          ...store.getState().signin,
        },
      }).then((response) => {
        alert('Requête de connexion envoyée');
      }).catch((error) => {
        alert(`Echec de l'envoie de la requête :${error}`);
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
        alert('Requête inscription envoyée');
      }).catch((error) => {
        alert(`Echec de l'envoie de la requête :${error}`);
      });
      break;
    }
  }

  // On passe au voisin
  next(action);
};

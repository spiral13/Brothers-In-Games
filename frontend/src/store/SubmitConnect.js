
import { SUBMIT_CONNECT, SIGNUP_SUBMIT } from './reducer';
import axios from 'axios';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case SUBMIT_CONNECT: {
      axios.post('/app_dev.php/connection', {
        params: {
          ...store.getState(),
        },
      }).then((response) => {
        alert('Requête de connexion envoyée');
        console.log(response);
      }).catch((error) => {
        console.log(`Echec de l'envoie de la requête :${error}`);
      });
      break;
    }

    case SIGNUP_SUBMIT: {
      axios.post('/app_dev.php/user/create', {
        params: {
          ...store.getState(),
        },
      }).then((response) => {
        alert('Requête inscription envoyée');
        console.log(response);
      }).catch((error) => {
        console.log(`Echec de l'envoie de la requête :${error}`);
      });
      break;
    }
  }

  // On passe au voisin
  next(action);
};

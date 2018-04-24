
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
        console.log(response);
      }).catch((error) => {
        console.log(`Echec de l'envoie de la requête :${error}`);
      });
      break;
    }

    case SIGNUP_SUBMIT: {
      axios.post(Routing.generate('signup'), {
        params: {
          ...store.getState().signup,
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

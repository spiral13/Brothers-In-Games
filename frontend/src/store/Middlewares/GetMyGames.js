// Npm import
import axios from 'axios';

// Local import
import { GET_ALL_MY_GAMES, addAllMyGames } from 'frontend/src/store/reducers/MyGamesReducer';

/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case GET_ALL_MY_GAMES: {
      // eslint-disable-next-line
      axios.get(Routing.generate('get_user_games')).then((response) => {
        console.log(response);
        // Ici, faire un dispatch.
        store.dispatch(addAllMyGames(response));
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
// Pour ajout d'un jeu -Page MyGames
//1- barre de recherche: aller chercher tous les jeux en fonction du slug
//2- Utilisateur sélectionne un jeu dans la liste , le sélectionne ==> envoi requête en post  du slug + id
//3- affichage d'un nouvel "carte" oneOfMyGames 

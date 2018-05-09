// Npm import
import axios from 'axios';

// Local import
import { GET_ALL_MY_GAMES, SUBMIT_SELECTED_GAME, SUBMIT_GAME_TO_DELETE, SUBMIT_ANNOUNCE, addAllMyGames, addNewGameToList, DeleteGameFromList } from 'frontend/src/store/reducers/MyGamesReducer';
import { changeLoading } from 'frontend/src/store/reducers/LoadingReducer';

/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case SUBMIT_ANNOUNCE: {
      const formData = new FormData();
      formData.append('content', store.getState().MyGamesReducer.textArea);
      formData.append('game-id', store.getState().MyGamesReducer.selectedPostGame.id);
      axios.post(Routing.generate('announcements_create'), formData).then((response) => {
        alert(response.data.message);
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case GET_ALL_MY_GAMES: {
      // eslint-disable-next-line
      axios.get(Routing.generate('get_user_games')).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addAllMyGames(response));
        store.dispatch(changeLoading('loadingMyGames'));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case SUBMIT_SELECTED_GAME: {
      // J'assigne les donnée que je veux a data
      const data = store.getState().MyGamesReducer.selectedOption;
      // Je crée un objet FormData
      const formData = new FormData();
      // Je boucle pour y stocker tout à l'interieur de l'objet FormData
      formData.append('id', data.id);
      formData.append('title', data.title);
      // eslint-disable-next-line
      axios.post(Routing.generate('my_games_add'), formData).then((response) => {
        // Ici, faire un dispatch.
        store.dispatch(addNewGameToList(response));
      }).catch((error) => {
        console.log(error);
      });
      break;
    }

    case SUBMIT_GAME_TO_DELETE: {
      // J'assigne les donnée que je veux a data
      const data = store.getState().MyGamesReducer.selectedOptionToDelete;
      // Je crée un objet FormData
      const formData = new FormData();
      // Je boucle pour y stocker tout à l'interieur de l'objet FormData
      formData.append('id', data.id);
      formData.append('title', data.title);
      // eslint-disable-next-line
      axios.post(Routing.generate('my_games_remove'), formData).then((response) => {
        store.dispatch(DeleteGameFromList(response));
        // Ici, faire un dispatch.
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

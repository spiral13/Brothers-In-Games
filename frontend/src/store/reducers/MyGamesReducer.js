/**
 * Initial State---------------------------------------------------------
 */
const initialState = {
  mygames: [
    {

    },
  ],
  selectedOption: {},
  selectedOptionToDelete: {},
  selectedPostGame: {},
  textArea: '',
};

/**
 * Types----------------------------------------------------------------
 */
export const GET_ALL_MY_GAMES = 'GET_ALL_MY_GAMES';
export const ADD_ALL_MY_GAMES = 'ADD_ALL_MY_GAMES';

export const CHANGE_FORM_GAME_SELECTED = 'CHANGE_FORM_GAME_SELECTED';
export const SUBMIT_SELECTED_GAME = 'SUBMIT_SELECTED_GAME';
export const ADD_NEW_GAME_TO_LIST = 'ADD_NEW_GAME_TO_LIST';

export const CHANGE_FORM_GAME_TO_DELETE = 'CHANGE_FORM_GAME_TO_DELETE';
export const SUBMIT_GAME_TO_DELETE = 'SUBMIT_GAME_TO_DELETE';
export const DELETE_GAME_FROM_LIST = 'DELETE_GAME_FROM_LIST';

const CHANGE_FORM_GAME_SELECTED_FOR_POST = 'CHANGE_FORM_GAME_SELECTED_FOR_POST';
const CHANGE_TEXTAREA = 'CHANGE_TEXTAREA';
export const SUBMIT_ANNOUNCE = 'SUBMIT_ANNOUNCE';
/**
 * Reducer-------------------------------------------------------------
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FORM_GAME_SELECTED_FOR_POST:
      return {
        ...state,
        selectedPostGame: {
          ...state.selectedPostGame,
          title: action.title,
          id: action.id,
        },
      };

    case CHANGE_TEXTAREA:
      return {
        ...state,
        textArea: action.value,
      };

    case SUBMIT_ANNOUNCE:
      return {
        ...state,
      };

    /**
     * Display after loading page
     */
    case GET_ALL_MY_GAMES:
      return {
        ...state,
      };

    case ADD_ALL_MY_GAMES:
      return {
        ...state,
        mygames: action.mygames.data,
      };

    /**
     * Add a game to my games list
     */
    case CHANGE_FORM_GAME_SELECTED:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          title: action.title,
          id: action.id,
        },
      };

    case SUBMIT_SELECTED_GAME:
      return {
        ...state,
      };

    case ADD_NEW_GAME_TO_LIST:
      return {
        ...state,
        mygames: [...state.mygames, { ...action.game.data.game[0] }],
      };

    /**
     * Delete a one of my games from my list
     */
    case CHANGE_FORM_GAME_TO_DELETE:
      return {
        ...state,
        selectedOptionToDelete: {
          ...state.selectedOptionToDelete,
          title: action.title,
          id: action.id,
        },
      };

    case SUBMIT_GAME_TO_DELETE:
      return {
        ...state,
      };

    case DELETE_GAME_FROM_LIST:
      return {
        ...state,
        mygames: [...state.mygames, { ...action.mygame.data.mygame[0] }],
      };

    default:
      return state;
  }
};


/**
 * Action Creators------------------------------------------------------
 */

/**
  * Display after loading page
  */
export const getAllMyGames = () => ({
  type: GET_ALL_MY_GAMES,
});

export const addAllMyGames = mygames => ({
  type: ADD_ALL_MY_GAMES,
  mygames,
});

/**
 * Add a game to my games list
 */
export const changeFormGameSelected = (title, id) => ({
  type: CHANGE_FORM_GAME_SELECTED,
  title,
  id,
});

export const submitSelectedGame = () => ({
  type: SUBMIT_SELECTED_GAME,
});

export const addNewGameToList = game => ({
  type: ADD_NEW_GAME_TO_LIST,
  game,
});

/**
 * Delete a one of my games from my list
 */
export const changeFormGameToDelete = (title, id) => ({
  type: CHANGE_FORM_GAME_TO_DELETE,
  title,
  id,
});

export const submitGameToDelete = () => ({
  type: SUBMIT_GAME_TO_DELETE,
});

export const DeleteGameFromList = mygame => ({
  type: DELETE_GAME_FROM_LIST,
  mygame,
});

export const changeFormGameSelectedForPost = (title, id) => ({
  type: CHANGE_FORM_GAME_SELECTED_FOR_POST,
  title,
  id,
});

export const changeTextArea = value => ({
  type: CHANGE_TEXTAREA,
  value,
});

export const submitAnnounce = () => ({
  type: SUBMIT_ANNOUNCE,
});

/**
 * Export
 */
export default reducer;

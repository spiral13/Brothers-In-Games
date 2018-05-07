/**
 * Initial State
 */
const initialState = {
  mygames: [
    {

    },
  ],
  selectedOption: {},
};

/**
 * Types
 */
export const GET_ALL_MY_GAMES = 'GET_ALL_MY_GAMES';
export const ADD_ALL_MY_GAMES = 'ADD_ALL_MY_GAMES';
export const CHANGE_FORM_GAME_SELECTED = 'CHANGE_FORM_GAME_SELECTED';
export const SUBMIT_SELECTED_GAME = 'SUBMIT_SELECTED_GAME';
export const ADD_NEW_GAME_TO_LIST = 'ADD_NEW_GAME_TO_LIST';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_MY_GAMES:
      return {
        ...state,
      };

    case ADD_ALL_MY_GAMES:
      return {
        ...state,
        mygames: action.mygames.data,
      };

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

    default:
      return state;
  }
};
/**
 * Action Creators
 */
export const getAllMyGames = () => ({
  type: GET_ALL_MY_GAMES,
});

export const addAllMyGames = mygames => ({
  type: ADD_ALL_MY_GAMES,
  mygames,
});

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
 * Export
 */
export default reducer;

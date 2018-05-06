/**
 * Initial State
 */
const initialState = {
  mygames: [
    {

    },
  ],
  selectedOption: '',
};

/**
 * Types
 */
export const GET_ALL_MY_GAMES = 'GET_ALL_MY_GAMES';
export const ADD_ALL_MY_GAMES = 'ADD_ALL_MY_GAMES';
export const CHANGE_FORM_GAME_SELECTED = 'CHANGE_FORM_GAME_SELECTED';
export const SUBMIT_SELECTED_GAME = 'SUBMIT_SELECTED_GAME';

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
        selectedOption: action.selectedOption.data,
      };
    case SUBMIT_SELECTED_GAME:
      return {
        ...state,
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

export const changeFormGameSelected = selectedOption => ({
  type: CHANGE_FORM_GAME_SELECTED,
  selectedOption,
});

export const submitSelectedGame = () => ({
  type: SUBMIT_SELECTED_GAME,
});

/**
 * Export
 */
export default reducer;

/**
 * Initial State
 */
const initialState = {
  mygames: [
    {

    },
  ],
};

/**
 * Types
 */
export const GET_ALL_MY_GAMES = 'GET_ALL_MY_GAMES';
export const ADD_ALL_MY_GAMES = 'ADD_ALL_MY_GAMES';

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

/**
 * Export
 */
export default reducer;

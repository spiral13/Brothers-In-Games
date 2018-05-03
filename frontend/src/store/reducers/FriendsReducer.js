/**
 * Initial State
 */
const initialState = {
  friend: [

  ],
};

/**
 * Types
 */
export const GET_FRIENDS = 'GET_FRIENDS';
const ADD_FRIENDS = 'ADD_FRIENDS';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
      };

    case ADD_FRIENDS:
      return {
        ...state,
        friend: action.friends.data,
      };

    default:
      return state;
  }
};
/**
 * Action Creators
 */
export const getAllFriends = () => ({
  type: GET_FRIENDS,
});

export const addFriends = friends => ({
  type: ADD_FRIENDS,
  friends,
});


/**
 * Export
 */
export default reducer;

/**
 * Initial State
 */
const initialState = {
  friend: [

  ],
  friendToDelete: '',
};

/**
 * Types
 */
export const GET_FRIENDS = 'GET_FRIENDS';
const ADD_FRIENDS = 'ADD_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
const CHANGE_FRIEND_TO_DELETE = 'CHANGE_FRIEND_TO_DELETE';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
      };

    case CHANGE_FRIEND_TO_DELETE:
      return {
        ...state,
        friendToDelete: action.IdFriend,
      };

    case DELETE_FRIEND: {
      let newState = [];
      state.friend[0].myFriend.forEach((friend) => {
        if (friend.id !== state.friendToDelete) {
          newState = [...newState, { ...friend }];
        }
      });
      return {
        ...state,
        friend: [
          {
            ...state.friend[0],
            myFriend: [...newState],
          },
        ],
      };
    }

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

export const changeOption = IdFriend => ({
  type: CHANGE_FRIEND_TO_DELETE,
  IdFriend,
});

export const deleteFriend = () => ({
  type: DELETE_FRIEND,
});

/**
 * Export
 */
export default reducer;

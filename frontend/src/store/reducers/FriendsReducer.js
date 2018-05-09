/**
 * Initial State
 */
const initialState = {
  friend: [

  ],
  friendToDelete: '',
  addOneFriend: '',
};

/**
 * Types
 */
export const GET_FRIENDS = 'GET_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const ADD_ONE_FRIEND = 'ADD_ONE_FRIEND';
const ADD_FRIENDS = 'ADD_FRIENDS';
const CHANGE_FRIEND_TO_DELETE = 'CHANGE_FRIEND_TO_DELETE';
const CHANGE_ADD_ONE_FRIEND = 'CHANGE_ADD_ONE_FRIEND';
const SHOW_ONE_FRIEND = 'SHOW_ONE_FRIEND';
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
        if (friend.id !== state.friendToDelete) newState = [...newState, { ...friend }];
      });
      return {
        ...state,
        friend: [{ ...state.friend[0], myFriend: [...newState] }],
      };
    }

    case ADD_FRIENDS:
      return {
        ...state,
        friend: action.friends.data,
      };

    case CHANGE_ADD_ONE_FRIEND:
      return {
        ...state,
        addOneFriend: action.friend,
      };

    case ADD_ONE_FRIEND:
      return {
        ...state,
      };

    case SHOW_ONE_FRIEND:
      return {
        ...state,
        friend: [{ ...state.friend[0], myFriend: [...state.friend[0].myFriend, { ...action.friend.data.user[0] }] }],
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

export const submitAddFriend = () => ({
  type: ADD_ONE_FRIEND,
});

export const changeAddOneFriend = friend => ({
  type: CHANGE_ADD_ONE_FRIEND,
  friend,
});

export const showOneFriend = friend => ({
  type: SHOW_ONE_FRIEND,
  friend,
})

/**
 * Export
 */
export default reducer;

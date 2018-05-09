/**
 * Initial State
 */
const initialState = {
  announcements: [
    {

    },
  ],
  profileAnnounce: {

  },
  myAnnouncements: [{}],
};

/**
 * Types
 */
export const GET_ALL_ANNOUNCEMENTS = 'GET_ALL_ANNOUNCEMENTS';
export const GET_ANNOUNCEMENT_SELECTED = 'GET_ANNOUNCEMENT_SELECTED';
export const SHOW_ANNOUNCEMENTS = 'SHOW_ANNOUNCEMENTS';
export const GET_PROFILE_ANNOUNCE = 'GET_PROFILE_ANNOUNCE';
export const GET_ALL_MY_ANNOUNCEMENTS = 'GET_ALL_MY_ANNOUNCEMENTS';
const ADD_PROFILE_ANNOUNCE = 'ADD_PROFILE_ANNOUNCE';
const CHANGE_PROFILE_ANNOUNCE = 'CHANGE_PROFILE_ANNOUNCE';
const SHOW_MY_ANNOUNCEMENTS = 'SHOW_MY_ANNOUNCEMENTS';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_ANNOUNCEMENTS:
      return {
        ...state,
      };

    case GET_ALL_MY_ANNOUNCEMENTS:
      return {
        ...state,
      };

    case SHOW_MY_ANNOUNCEMENTS:
      return {
        ...state,
        myAnnouncements: action.myAnnouncements.data,
      };

    case GET_ANNOUNCEMENT_SELECTED:
      return {
        ...state,
      };

    case SHOW_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.announcements.data,
      };

    case GET_PROFILE_ANNOUNCE:
      return {
        ...state,
      };

    case ADD_PROFILE_ANNOUNCE:
      return {
        ...state,
        profileAnnounce: action.profile.data,
      };

    case CHANGE_PROFILE_ANNOUNCE:
      return {
        ...state,
        profileAnnounce: action.profile,
      };

    default:
      return state;
  }
};
/**
 * Action Creators
 */
export const addAnnouncements = () => {
  if (window.location.search === '') return ({ type: GET_ALL_ANNOUNCEMENTS });
  return ({ type: GET_ANNOUNCEMENT_SELECTED });
};

export const showAnnouncements = announcements => ({
  type: SHOW_ANNOUNCEMENTS,
  announcements,
});

export const getProfileAnnounce = () => ({
  type: GET_PROFILE_ANNOUNCE,
});

export const addProfileAnnounce = profile => ({
  type: ADD_PROFILE_ANNOUNCE,
  profile,
});

// export const changeProfileAnnounce = profile => ({
//   type: CHANGE_PROFILE_ANNOUNCE,
//   profile,
// });

export const getAllMyAnnouncements = () => ({
  type: GET_ALL_MY_ANNOUNCEMENTS,
});

export const showMyAnnouncements = myAnnouncements => ({
  type: SHOW_MY_ANNOUNCEMENTS,
  myAnnouncements,
});
/**
 * Export
 */
export default reducer;

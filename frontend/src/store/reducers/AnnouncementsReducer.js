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
};

/**
 * Types
 */
export const GET_ALL_ANNOUNCEMENTS = 'GET_ALL_ANNOUNCEMENTS';
export const GET_ANNOUNCEMENT_SELECTED = 'GET_ANNOUNCEMENT_SELECTED';
export const SHOW_ANNOUNCEMENTS = 'SHOW_ANNOUNCEMENTS';
export const GET_PROFILE_ANNOUNCE = 'GET_PROFILE_ANNOUNCE';
const ADD_PROFILE_ANNOUNCE = 'ADD_PROFILE_ANNOUNCE';
const CHANGE_PROFILE_ANNOUNCE = 'CHANGE_PROFILE_ANNOUNCE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_ANNOUNCEMENTS:
      return {
        ...state,
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

export const changeProfileAnnounce = profile => ({
  type: CHANGE_PROFILE_ANNOUNCE,
  profile,
});
/**
 * Export
 */
export default reducer;

/**
 * Initial State
 */
const initialState = {
  announcements: [
    {

    },
  ],
};

/**
 * Types
 */
export const GET_ALL_ANNOUNCEMENTS = 'GET_ALL_ANNOUNCEMENTS';
export const GET_ANNOUNCEMENT_SELECTED = 'GET_ANNOUNCEMENT_SELECTED';
export const SHOW_ANNOUNCEMENTS = 'SHOW_ANNOUNCEMENTS';

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

    default:
      return state;
  }
};
/**
 * Action Creators
 */
export const addAllAnnouncements = () => ({
  type: GET_ALL_ANNOUNCEMENTS,
});

export const showAnnouncements = announcements => ({
  type: SHOW_ANNOUNCEMENTS,
  announcements,
});

/**
 * Export
 */
export default reducer;

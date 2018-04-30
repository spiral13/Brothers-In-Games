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
export const GET_ANNOUNCEMENTS = 'GET_ANNOUNCEMENTS';
export const SHOW_ANNOUNCEMENTS = 'SHOW_ANNOUNCEMENTS';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
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
export const addAnnouncements = () => ({
  type: GET_ANNOUNCEMENTS,
});

export const showAnnouncements = announcements => ({
  type: SHOW_ANNOUNCEMENTS,
  announcements,
});

/**
 * Export
 */
export default reducer;

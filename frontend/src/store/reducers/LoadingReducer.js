/**
 * Initial State
 */
const initialState = {
  loadings: {
    loadingFriends: false,
    loadingGames: false,
    loadingMyGames: false,
    loadingNews: false,
    loadingActus: false,
    loadingAnnouncements: false,
    loadingAnnouncement: false,
    loadingArticle: false,
    loadingProfileAnnounce: false,
    loadingReceiveMessages: false,
    loadingSendedMessages: false,
    loadingOneMessage: false,
  },
};

/**
 * Types
 */
const CHANGE_LOADING = 'CHANGE_LOADING';
const CHANGE_ANNOUNCEMENTS_TO_FALSE = 'CHANGE_ANNOUNCEMENTS_TO_FALSE';
const CHANGE_LOADING_PROFILE_ANNOUNCE = 'CHANGE_LOADING_PROFILE_ANNOUNCE';
const CHANGE_ONE_MESSAGE_TO_FALSE = 'CHANGE_ONE_MESSAGE_TO_FALSE';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [action.loading]: true,
        },
      };

    case CHANGE_ONE_MESSAGE_TO_FALSE:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          loadingOneMessage: false,
        },
      };

    case CHANGE_LOADING_PROFILE_ANNOUNCE:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          loadingProfileAnnounce: false,
        },
      };

    case CHANGE_ANNOUNCEMENTS_TO_FALSE:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          loadingAnnouncements: false,
          loadingAnnouncement: false,
        },
      };

    default:
      return state;
  }
};
/**
 * Action Creators
 */
export const changeLoading = loading => ({
  type: CHANGE_LOADING,
  loading,
});

export const changeLoadingProfileAnnounce = () => ({
  type: CHANGE_LOADING_PROFILE_ANNOUNCE,
});

export const changeAnnouncementsToFalse = () => ({
  type: CHANGE_ANNOUNCEMENTS_TO_FALSE,
});

export const changeOneMessageToFalse = () => ({
  type: CHANGE_ONE_MESSAGE_TO_FALSE,
});

/**
 * Export
 */
export default reducer;

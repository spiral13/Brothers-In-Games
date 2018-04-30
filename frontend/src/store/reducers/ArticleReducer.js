/**
 * Initial State
 */
const initialState = {
  article: [
    {

    },
  ],
};

/**
 * Types
 */
export const GET_ARTICLE = 'GET_ARTICLE';
export const ADD_ARTICLE = 'ADD_ARTICLE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ARTICLE:
      return {
        ...state,
      };

    case ADD_ARTICLE:
      return {
        ...state,
        article: action.article.data,
      };

    default:
      return state;
  }
};
/**
 * Action Creators
 */
export const getArticle = () => ({
  type: GET_ARTICLE,
});

export const addArticle = article => ({
  type: ADD_ARTICLE,
  article,
});

/**
 * Export
 */
export default reducer;

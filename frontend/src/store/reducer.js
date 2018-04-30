/**
 * Initial State
 */
const initialState = {
  signup: {
    username: '',
    newPassword: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
  },
  signin: {
    _username: '',
    _password: '',
  },
  games: [
    {

    },
  ],
  news: [{}],
};

/**
 * Types
 */
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';

const CHANGE_FORM_SIGNIN = 'CHANGE_FORM_SIGNIN';
const CHANGE_FORM_SIGNUP = 'CHANGE_FORM_SIGNUP';

export const SUBMIT_CONNECT = 'SUBMIT_CONNECT';

export const GET_NEWS = 'GET_NEWS';
const ADD_NEWS = 'ADD_NEWS';

export const GET_GAMES = 'GET_GAMES';
const ADD_GAMES = 'ADD_GAMES';

export const GET_ACTUS = 'GET_ACTUS';
const ADD_ACTUS = 'ADD_ACTUS';


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_SUBMIT:
      return {
        ...state,
      };

    case CHANGE_FORM_SIGNIN:
      return {
        ...state,
        signin: {
          ...state.signin,
          [action.input]: action.value,
        },
      };

    case CHANGE_FORM_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          [action.input]: action.value,
        },
      };

    case SUBMIT_CONNECT:
      return {
        ...state,
      };

    case GET_NEWS:
      return {
        ...state,
      };

    case ADD_NEWS:
      return {
        ...state,
        news: action.news.data,
      };

    case GET_GAMES:
      return {
        ...state,
      };

    case ADD_GAMES:
      return {
        ...state,
        games: action.games.data,
      };

    case GET_ACTUS:
      return {
        ...state,
      };

    case ADD_ACTUS:
      return {
        ...state,
        sidebarActus: action.actus.data,
      };

    default:
      return state;
  }
};
/**
 * Action Creators
 */
export const signUpSubmit = () => ({
  type: SIGNUP_SUBMIT,
});

export const changeForm = (input, value) => ({
  type: CHANGE_FORM_SIGNIN,
  input,
  value,
});

export const changeFormSignup = (input, value) => ({
  type: CHANGE_FORM_SIGNUP,
  input,
  value,
});

export const submitConnect = () => ({
  type: SUBMIT_CONNECT,
});

export const getAllNews = () => ({
  type: GET_NEWS,
});

export const addNews = news => ({
  type: ADD_NEWS,
  news,
});

export const getAllGames = () => ({
  type: GET_GAMES,
});

export const addAllGames = games => ({
  type: ADD_GAMES,
  games,
});

export const getAllActus = () => ({
  type: GET_ACTUS,
});

export const addActus = actus => ({
  type: ADD_ACTUS,
  actus,
});
/**
 * Export
 */
export default reducer;

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
  games: [],
  allGames: [],
  news: [{}],
  redirect: {
    type: false,
    route: '/app_dev.php',
  },
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

const REDIRECT = 'REDIRECT';

const CHANGE_TYPE_ROUTING = 'CHANGE_TYPE_ROUTING';
export const ADD_ALL_BDD_GAMES = 'ADD_ALL_BDD_GAMES';
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

    case REDIRECT:
      return {
        ...state,
        redirect: {
          type: true,
          route: action.response,
        },
      };

    case CHANGE_TYPE_ROUTING:
      return {
        ...state,
        redirect: {
          ...state.redirect,
          type: false,
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

    case ADD_ALL_BDD_GAMES:
      return {
        ...state,
        allGames: action.allBddGames.data,
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

export const redirect = response => ({
  type: REDIRECT,
  response,
});

export const changeTypeRouting = () => ({
  type: CHANGE_TYPE_ROUTING,
});

export const addAllBddGames = allBddGames => ({
  type: ADD_ALL_BDD_GAMES,
  allBddGames,
});
/**
 * Export
 */
export default reducer;

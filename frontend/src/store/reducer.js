/**
 * Initial State
 */
const initialState = {
  signup: {
    username: "",
    newpassword: "",
    confirmpassword: "",
    email: "",
  },
  signin: {
    _username: "Login",
    _password: "Password",
  },
  games: [
    {
      title: 'Overwatch',
      cover: 'https://media.koreus.com/201701/allez-faire-loutre.jpg',
      description: '10',
    },
    {
      title: 'Fortnite',
      cover: 'http://www.prodiges.fr/wp-content/uploads/2016/09/vampirechat.jpg',
      description: '20',
    },
    {
      title: 'League of Legends',
      cover: 'https://media.koreus.com/201701/allez-faire-loutre.jpg',
      description: '30',
    },
    {
      title: 'Dota 2',
      cover: 'http://rayanegh92.a.r.f.unblog.fr/files/2009/03/m407y5cqkvchat01bin.jpg',
      description: '40',
    },
    {
      title: 'Counter Strike: Global offensive',
      cover: 'https://media.koreus.com/201701/allez-faire-loutre.jpg',
      description: '50',
    },
    {
      title: 'Hearthstone',
      cover: 'http://rayanegh92.a.r.f.unblog.fr/files/2009/03/m407y5cqkvchat01bin.jpg',
      description: '60',
    },
    {
      title: 'Warframe',
      cover: 'https://media.koreus.com/201701/allez-faire-loutre.jpg',
      description: '70',
    },
  ],
  news: [{}],
};

/**
 * Types
 */
const SIGNUP_CHANGE_USERNAME_INPUT = 'SIGNUP_CHANGE_USERNAME_INPUT';
const SIGNUP_CHANGE_NEWPASSWORD_INPUT = 'SIGNUP_CHANGE_NEWPASSWORD_INPUT';
const SIGNUP_CHANGE_CONFIRMPASSWORD_INPUT = 'SIGNUP_CHANGE_CONFIRMPASSWORD_INPUT';
const SIGNUP_CHANGE_EMAIL_INPUT = 'SIGNUP_CHANGE_EMAIL_INPUT';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';

const CHANGE_PASSWORD_FORM = 'CHANGE_PASSWORD_FORM';
const CHANGE_LOGIN_FORM = "CHANGE_LOGIN_FORM";
export const SUBMIT_CONNECT = "SUBMIT_CONNECT";

export const GET_NEWS = "GET_NEWS";
const ADD_NEWS = "ADD_NEWS";

export const GET_GAMES = "GET_GAMES";
const ADD_GAMES = "ADD_GAMES";

export const GET_ACTUS = "GET_ACTUS";
const ADD_ACTUS = "ADD_ACTUS";


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_CHANGE_USERNAME_INPUT:
      return {
        ...state,
        signup: {
          ...state.signup,
          username: action.username,
        }
      };

    case SIGNUP_CHANGE_NEWPASSWORD_INPUT:
      return {
        ...state,
        signup: {
          ...state.signup,
          newpassword: action.newpassword,
        }
      };

    case SIGNUP_CHANGE_CONFIRMPASSWORD_INPUT:
      return {
        ...state,
        signup: {
          ...state.signup,
          confirmpassword: action.confirmpassword,
        }
      };

    case SIGNUP_CHANGE_EMAIL_INPUT:
      return {
        ...state,
        signup: {
          ...state.signup,
          email: action.email,
        }
      };

    case SIGNUP_SUBMIT:
      return {
        ...state,
      };

    case CHANGE_PASSWORD_FORM: {
      return {
        ...state,
        signin: {
          ...state.signin,
          _password: action.value,
        }
      };
    }

    case CHANGE_LOGIN_FORM:
      return {
        ...state,
        signin: {
          ...state.signin,
          _username: action.value,
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
      }

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
export const changeSignUpUserName = username => ({
  type: SIGNUP_CHANGE_USERNAME_INPUT,
  username,
});

export const changeSignUpNewPassword = newpassword => ({
  type: SIGNUP_CHANGE_NEWPASSWORD_INPUT,
  newpassword,
});

export const changeSignUpConfirmPassword = confirmpassword => ({
  type: SIGNUP_CHANGE_CONFIRMPASSWORD_INPUT,
  confirmpassword,
});


export const changeSignUpEmail = email => ({
  type: SIGNUP_CHANGE_EMAIL_INPUT,
  email,
});

export const signUpSubmit = () => ({
  type: SIGNUP_SUBMIT,
});

export const changePasswordForm = value => ({
  type: CHANGE_PASSWORD_FORM,
  value,
});

export const changeLoginForm = value => ({
  type: CHANGE_LOGIN_FORM,
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

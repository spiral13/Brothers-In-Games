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
      cover: '',
      description: '',
    },
    {
      title: 'Fortnite',
      cover: '',
      description: '',
    },
    {
      title: 'League of Legends',
      cover: '',
      description: '',
    },
    {
      title: 'Dota 2',
      cover: '',
      description: '',
    },
    {
      title: 'Counter Strike: Global offensive',
      cover: '',
      description: '',
    },
    {
      title: 'Hearthstone',
      cover: '',
      description: '',
    },
    {
      title: 'Warframe',
      cover: '',
      description: '',
    },
  ],
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

const GAMESLIST_DISPLAY_TITLE = 'GAMESLIST_DISPLAY_TITLE';
const GAMESLIST_DISPLAY_COVER = 'GAMESLIST_DISPLAY_COVER';
const GAMESLIST_DISPLAY_DESCRIPTION = 'GAMESLIST_DISPLAY_DESCRIPTION';

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
    // Ajouter dans le state toutes les news.
      return {
        ...state,
      };

      case GAMESLIST_DISPLAY_TITLE:
      return {
        ...state,
        games: {
          ...state.title,
          title: action.title,
        }
      };

    case GAMESLIST_DISPLAY_COVER:
      return {
        ...state,
        games: {
          ...state.cover,
          cover: action.cover,
        }
      };

    case GAMESLIST_DISPLAY_DESCRIPTION:
      return {
        ...state,
        games: {
          ...state.description,
          description: action.description,
        }
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



export const displayTitleGame = title => ({
  type: GAMESLIST_DISPLAY_TITLE,
  title,
});

export const displayCoverGame = cover => ({
  type: GAMESLIST_DISPLAY_COVER,
  cover,
});
export const displayDescriptionGame = description => ({
  type: GAMESLIST_DISPLAY_DESCRIPTION,
  description,
});
/**
 * Export
 */
export default reducer;

/**
 * Initial State
 */
const initialState = {
  message: 'Coucou',
  signup: {
    username: ""
    newpassword: "",
    confirmpassword: "",
    email: "",
  },
  signin: {
    login: "",
    password: "",
  },
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
const SIGNUP_CHANGE_USERNAME_INPUT = 'SIGNUP_CHANGE_USERNAME_INPUT';
const SIGNUP_CHANGE_NEWPASSWORD_INPUT = 'SIGNUP_CHANGE_NEWPASSWORD_INPUT';
const SIGNUP_CHANGE_CONFIRMPASSWORD_INPUT = 'SIGNUP_CHANGE_CONFIRMPASSWORD_INPUT';
const SIGNUP_CHANGE_EMAIL_INPUT = 'SIGNUP_CHANGE_EMAIL_INPUT';
const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
      };
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

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

export const changeSignUpUserName = username => ({
  type: SIGNUP_CHANGE_USERNAME_INPUT,
  username
});

export const changeSignUpNewPassword = newpassword => ({
  type: SIGNUP_CHANGE_NEWPASSWORD_INPUT,
  newpassword
});

export const changeSignUpConfirmPassword = confirmpassword => ({
  type: SIGNUP_CHANGE_CONFIRMPASSWORD_INPUT,
  confirmpassword
});


export const changeSignUpEmail = email => ({
  type: SIGNUP_CHANGE_EMAIL_INPUT,
  email
});

export const signUpSubmit = () => ({
  type: SIGNUP_SUBMIT,
});



/**
 * Export
 */
export default reducer;

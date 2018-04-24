/**
 * Initial State
 */
const initialState = {
  signup: {

  },
  signin: {
    login: "Login",
    password: "Password",
  },
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
const CHANGE_PASSWORD_FORM = 'CHANGE_PASSWORD_FORM';
const CHANGE_LOGIN_FORM = "CHANGE_LOGIN_FORM";
export const SUBMIT_CONNECT = "SUBMIT_CONNECT";
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
      };

    case CHANGE_PASSWORD_FORM: {
      return {
        ...state,
        signin: {
          ...state.signin,
          password: action.value,
        }
      };
    }

    case CHANGE_LOGIN_FORM:
      return {
        ...state,
        signin: {
          ...state.signin,
          login: action.value,
        },
      };

    case SUBMIT_CONNECT:
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

/**
 * Export
 */
export default reducer;

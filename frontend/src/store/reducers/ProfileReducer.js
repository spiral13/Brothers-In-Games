/**
 * Initial State---------------------------------------------------------
 */
const initialState = {
  user: {
    username: '',
    firstname: '',
    password: '',
    mail: '',
  },
};

/**
 * Types----------------------------------------------------------------
 */
const CHANGE_NAME = 'CHANGE_NAME';
export const SUBMIT_CHANGES = 'SUBMIT_CHANGES';
export const SUBMIT_CHANGES_PRIVATE_INFORMATION = 'SUBMIT_CHANGES_PRIVATE_INFORMATION';

/**
 * Reducer-------------------------------------------------------------
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        user: { ...state.user, [action.input]: action.value },
      };

    case SUBMIT_CHANGES:
      return {
        ...state,
      };

      case SUBMIT_CHANGES_PRIVATE_INFORMATION:
        return {
          ...state,
        };

    default:
      return state;
  }
};

/**
 * Action Creators------------------------------------------------------
 */
export const changeName = (input, value) => ({
  type: CHANGE_NAME,
  input,
  value,
});

export const submitChange = () => ({
  type: SUBMIT_CHANGES,
});

export const submitChangePrivateInformation = () => ({
  type: SUBMIT_CHANGES_PRIVATE_INFORMATION,
});

/**
 * Export
 */
export default reducer;

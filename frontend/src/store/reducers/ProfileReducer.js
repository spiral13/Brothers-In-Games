/**
 * Initial State---------------------------------------------------------
 */
const initialState = {
  account: {
    username: '',
    mail: '',
    password: '',
  },
  profileInformationChange: {
    username: '',
    firstname: '',
    image: '',
    gender: '',
    description: '',
    birthday: [],
    mail: '',
    password: '',
  },
};

/**
 * Types----------------------------------------------------------------
 */
const CHANGE_NAME = 'CHANGE_NAME';
export const SUBMIT_CHANGES = 'SUBMIT_CHANGES';
export const SUBMIT_CHANGES_PRIVATE_INFORMATION = 'SUBMIT_CHANGES_PRIVATE_INFORMATION';
export const GET_PROFILE_INFORMATION = 'GET_PROFILE_INFORMATION';
export const ADD_PROFILE_INFORMATION = 'ADD_PROFILE_INFORMATION';
export const GET_ACCOUNT_INFORMATION = 'GET_ACCOUNT_INFORMATION';
export const ADD_ACCOUNT_INFORMATION = 'ADD_ACCOUNT_INFORMATION';
const CHANGE_NAME_ACCOUNT = 'CHANGE_NAME_ACCOUNT';

/**
 * Reducer-------------------------------------------------------------
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        // profile: { ...state.profile, 0: { ...state.profile[0], 0: { ...state.profile[0][0], [action.input]: action.value } } },
        profileInformationChange: { ...state.profileInformationChange, [action.input]: action.value },
      };

    case SUBMIT_CHANGES:
      return {
        ...state,
      };

    case SUBMIT_CHANGES_PRIVATE_INFORMATION:
      return {
        ...state,
      };

    case GET_PROFILE_INFORMATION:
      return {
        ...state,
      };

    case ADD_PROFILE_INFORMATION:
      return {
        ...state,
        profileInformationChange: action.profile.data,
      };

    case GET_ACCOUNT_INFORMATION:
      return {
        ...state,
      };

    case ADD_ACCOUNT_INFORMATION:
      return {
        ...state,
        profileInformationChange: { ...state.profileInformationChange },
      };

    case CHANGE_NAME_ACCOUNT:
      return {
        ...state,
        account: { ...state.account, [action.input]: action.value },
        profileInformationChange: { ...state.profileInformationChange, [action.input]: action.value },
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

export const addUserProfileInformation = profile => ({
  type: ADD_PROFILE_INFORMATION,
  profile,
});

export const getUserProfileInformation = () => ({
  type: GET_PROFILE_INFORMATION,
});

export const addUserAccountInformation = account => ({
  type: ADD_ACCOUNT_INFORMATION,
  account,
});

export const getUserAccountInformation = () => ({
  type: GET_ACCOUNT_INFORMATION,
});

export const changeNameAccount = (input, value) => ({
  type: CHANGE_NAME_ACCOUNT,
  input,
  value,
});

/**
 * Export
 */
export default reducer;

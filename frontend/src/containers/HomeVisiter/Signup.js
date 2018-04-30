/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import SignupForm from 'frontend/src/components/HomeVisiter/SignupForm';
import { signUpSubmit, changeFormSignup } from 'frontend/src/store/reducer';
/**
* Code
*/

const mapStateToProps = state => ({
  username: state.reducer.signup.username,
  newPassword: state.reducer.signup.newPassword,
  confirmPassword: state.reducer.signup.confirmPassword,
  email: state.reducer.signup.email,
  confirmEmail: state.reducer.signup.confirmEmail,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ signUpSubmit, changeFormSignup }, dispatch),
});

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

/**
* Export
*/
export default SignupFormContainer;

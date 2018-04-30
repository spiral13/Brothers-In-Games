/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import SignupForm from 'frontend/src/components/HomeVisiter/SignupForm';
import { changeSignUpUserName, changeSignUpNewPassword, changeSignUpConfirmPassword, changeSignUpEmail, signUpSubmit } from 'frontend/src/store/reducer';
/**
* Code
*/

const mapStateToProps = state => ({
  username: state.reducer.signup.username,
  newpassword: state.reducer.signup.newpassword,
  confirmpassword: state.reducer.signup.confirmpassword,
  email: state.reducer.signup.email,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeSignUpUserName,
    changeSignUpNewPassword,
    changeSignUpConfirmPassword,
    changeSignUpEmail,
    signUpSubmit,
  }, dispatch),
});

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

/**
* Export
*/
export default SignupFormContainer;

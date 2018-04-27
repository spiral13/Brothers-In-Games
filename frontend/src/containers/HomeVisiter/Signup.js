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
  username: state.signup.username,
  newpassword: state.signup.newpassword,
  confirmpassword: state.signup.confirmpassword,
  email: state.signup.email,
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

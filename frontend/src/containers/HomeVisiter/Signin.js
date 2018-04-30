/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import SigninForm from 'frontend/src/components/HomeVisiter/SigninForm';
import { changePasswordForm, changeLoginForm, submitConnect } from 'frontend/src/store/reducer';
/**
* Code
*/

const mapStateToProps = state => ({
  // eslint-disable-next-line
  username: state.reducer.signin._username,
  // eslint-disable-next-line
  password: state.reducer.signin._password,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changePasswordForm, changeLoginForm, submitConnect }, dispatch),
});

const SigninFormContainer = connect(mapStateToProps, mapDispatchToProps)(SigninForm);

/**
* Export
*/
export default SigninFormContainer;

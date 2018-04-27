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
  username: state.signin._username,
  password: state.signin._password,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changePasswordForm, changeLoginForm, submitConnect }, dispatch),
});

const SigninFormContainer = connect(mapStateToProps, mapDispatchToProps)(SigninForm);

/**
* Export
*/
export default SigninFormContainer;

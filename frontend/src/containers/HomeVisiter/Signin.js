/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import SigninForm from 'frontend/src/components/HomeVisiter/SigninForm';
/**
 * Code
 */

 const mapStateToProps = (state, ownProp) => ({});

 const mapDispatchToProps = dispatch => ({
   // changeClick: () => {
   //   console.log('test');
   // },
 });

 const SigninFormContainer = connect(mapStateToProps, mapDispatchToProps)(SigninForm);

 /**
  * Export
  */
 export default SigninFormContainer;

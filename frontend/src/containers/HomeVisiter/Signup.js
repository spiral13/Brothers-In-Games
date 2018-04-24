/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import SignupForm from 'frontend/src/components/HomeVisiter/SignupForm';
/**
 * Code
 */

 const mapStateToProps = (state, ownProp) => ({});

 const mapDispatchToProps = dispatch => ({
   // changeClick: () => {
   //   console.log('test');
   // },
 });

 const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

 /**
  * Export
  */
 export default SignupFormContainer;

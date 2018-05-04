/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Contact from 'frontend/src/components/Announce/Contact';
import { hideResponse } from 'frontend/src/store/reducers/ResponseReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  popup: state.ResponseReducer.popup,
  response: state.ResponseReducer.response,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ hideResponse }, dispatch),
});

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

/**
 * Export
 */
export default ContactContainer;

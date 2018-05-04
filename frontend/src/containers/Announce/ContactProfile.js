/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import ContactProfile from 'frontend/src/components/Announce/Contact/ContactProfile';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const ContactProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ContactProfile);

/**
 * Export
 */
export default ContactProfileContainer;

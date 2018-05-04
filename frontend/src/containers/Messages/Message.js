/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Message from 'frontend/src/components/Messages/ReceiveMessages/Message';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

/**
 * Export
 */
export default MessageContainer;

/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import ReceiveMessages from 'frontend/src/components/Messages/ReceiveMessages';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllFriends }, dispatch),
});

const ReceiveMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(ReceiveMessages);

/**
 * Export
 */
export default ReceiveMessagesContainer;

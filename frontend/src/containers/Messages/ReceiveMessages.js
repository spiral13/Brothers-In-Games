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
import { receivedMessages, sendedMessages } from 'frontend/src/store/reducers/MessagesReducer';
import { getAllGames } from 'frontend/src/store/reducer';

/**
 * Code
 */

const mapStateToProps = state => ({
  loadings: state.LoadingReducer.loadings,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllFriends,
    receivedMessages,
    sendedMessages,
    getAllGames,
  }, dispatch),
});

const ReceiveMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(ReceiveMessages);

/**
 * Export
 */
export default ReceiveMessagesContainer;

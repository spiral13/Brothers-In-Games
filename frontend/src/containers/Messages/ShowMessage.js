/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import ShowMessage from 'frontend/src/components/Messages/ShowMessage';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
import { getOneMessage } from 'frontend/src/store/reducers/MessagesReducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllFriends, getOneMessage }, dispatch),
});

const ShowMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ShowMessage);

/**
 * Export
 */
export default ShowMessageContainer;

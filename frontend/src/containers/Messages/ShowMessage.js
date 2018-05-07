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
import { getAllGames } from 'frontend/src/store/reducer';

/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllFriends, getOneMessage, getAllGames }, dispatch),
});

const ShowMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ShowMessage);

/**
 * Export
 */
export default ShowMessageContainer;

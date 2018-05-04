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
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllFriends }, dispatch),
});

const ShowMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ShowMessage);

/**
 * Export
 */
export default ShowMessageContainer;

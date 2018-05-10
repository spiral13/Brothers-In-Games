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
import { changeOneMessageToFalse } from 'frontend/src/store/reducers/LoadingReducer';
import { getProfileAnnounce } from 'frontend/src/store/reducers/AnnouncementsReducer';


/**
 * Code
 */

const mapStateToProps = state => ({
  loadings: state.LoadingReducer.loadings,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getProfileAnnounce,
    getAllFriends,
    getOneMessage,
    getAllGames,
    changeOneMessageToFalse,
  }, dispatch),
});

const ShowMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ShowMessage);

/**
 * Export
 */
export default ShowMessageContainer;

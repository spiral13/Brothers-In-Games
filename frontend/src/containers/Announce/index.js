/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Announce from 'frontend/src/components/Announce';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
import { getAllGames } from 'frontend/src/store/reducer';
import { getProfileAnnounce } from 'frontend/src/store/reducers/AnnouncementsReducer';
import { changeLoadingProfileAnnounce } from 'frontend/src/store/reducers/LoadingReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  loadings: state.LoadingReducer.loadings,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllFriends,
    getProfileAnnounce,
    getAllGames,
    changeLoadingProfileAnnounce,
  }, dispatch),
});

const AnnounceContainer = connect(mapStateToProps, mapDispatchToProps)(Announce);

/**
 * Export
 */
export default AnnounceContainer;

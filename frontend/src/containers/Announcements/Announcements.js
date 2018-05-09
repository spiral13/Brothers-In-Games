/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Announcements from 'frontend/src/components/Announcements';
import { addAnnouncements } from 'frontend/src/store/reducers/AnnouncementsReducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
import { getAllGames } from 'frontend/src/store/reducer';
import { changeAnnouncementsToFalse } from 'frontend/src/store/reducers/LoadingReducer';

/**
 * Code
 */

const mapStateToProps = state => ({
  loadings: state.LoadingReducer.loadings,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addAnnouncements,
    getAllFriends,
    getAllGames,
    changeAnnouncementsToFalse,
  }, dispatch),
});

const AnnouncementsContainer = connect(mapStateToProps, mapDispatchToProps)(Announcements);

/**
 * Export
 */
export default AnnouncementsContainer;

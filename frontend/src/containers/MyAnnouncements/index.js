/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import MyAnnouncements from 'frontend/src/components/MyAnnouncements';

// actionsCreators
import { getAllGames } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
import { getAllMyAnnouncements } from 'frontend/src/store/reducers/AnnouncementsReducer';
/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  loadings: state.LoadingReducer.loadings,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllFriends,
    getAllGames,
    getAllMyAnnouncements,
  }, dispatch),
});


// Container
const MyAnnouncementsContainers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAnnouncements);

/*
 * Export
 */
export default MyAnnouncementsContainers;

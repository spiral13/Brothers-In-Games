/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import HomeMember from 'frontend/src/components/HomeMember';
import { getAllNews, getAllActus, getAllGames } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
import { addAnnouncements } from 'frontend/src/store/reducers/AnnouncementsReducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllNews,
    getAllFriends,
    getAllActus,
    addAnnouncements,
    getAllGames,
  }, dispatch),
});

const HomeMemberContainer = connect(mapStateToProps, mapDispatchToProps)(HomeMember);

/**
 * Export
 */
export default HomeMemberContainer;

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

/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addAnnouncements, getAllFriends }, dispatch),
});

const AnnouncementsContainer = connect(mapStateToProps, mapDispatchToProps)(Announcements);

/**
 * Export
 */
export default AnnouncementsContainer;

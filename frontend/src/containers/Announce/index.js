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
import { getProfileAnnounce } from 'frontend/src/store/reducers/AnnouncementsReducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllFriends, getProfileAnnounce }, dispatch),
});

const AnnounceContainer = connect(mapStateToProps, mapDispatchToProps)(Announce);

/**
 * Export
 */
export default AnnounceContainer;

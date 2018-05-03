/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import HomeMember from 'frontend/src/components/HomeMember';
import { getAllNews } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllNews, getAllFriends }, dispatch),
});

const HomeMemberContainer = connect(mapStateToProps, mapDispatchToProps)(HomeMember);

/**
 * Export
 */
export default HomeMemberContainer;

/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Sidebar from 'frontend/src/components/Navigation_sidebar/Sidebar';
import { redirect } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  games: state.reducer.games,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect, getAllFriends }, dispatch),
});

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

/**
 * Export
 */
export default SidebarContainer;

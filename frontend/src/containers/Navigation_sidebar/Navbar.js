/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Navbar from 'frontend/src/components/Navigation_sidebar/Navbar';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  playerName: state.FriendsReducer.friend[0].username,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

/**
 * Export
 */
export default NavbarContainer;

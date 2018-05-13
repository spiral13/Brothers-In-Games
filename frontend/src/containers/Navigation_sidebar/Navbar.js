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
import { changeFormGameSelectedForPost, changeTextArea, submitAnnounce } from 'frontend/src/store/reducers/MyGamesReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  playerName: state.FriendsReducer.friend[0].username,
  allGames: state.reducer.allGames,
  textArea: state.MyGamesReducer.textArea,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    redirect,
    changeFormGameSelectedForPost,
    changeTextArea,
    submitAnnounce,
  }, dispatch),
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

/**
 * Export
 */
export default NavbarContainer;

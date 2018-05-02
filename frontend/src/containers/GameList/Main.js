/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Main from 'frontend/src/components/GameList/Main';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  games: state.reducer.games,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

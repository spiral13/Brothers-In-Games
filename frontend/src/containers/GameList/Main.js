/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Main from 'frontend/src/components/GameList/Main';
/**
 * Code
 */

const mapStateToProps = state => ({
  games: state.reducer.games,
});

const mapDispatchToProps = () => ({});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

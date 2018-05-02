/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Main from 'frontend/src/components/Main';
/**
 * Code
 */

const mapStateToProps = state => ({
  mygames: state.MyGamesReducer.mygames,
});

const mapDispatchToProps = () => ({});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

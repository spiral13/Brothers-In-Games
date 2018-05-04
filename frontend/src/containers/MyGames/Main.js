/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Main from 'frontend/src/components/MyGames/Main';
// actionsCreators
import { getAllMyGames, addAllMyGames } from 'frontend/src/store/reducers/MyGamesReducer';
import { getAllGames, addAllGames } from 'frontend/src/store/reducer';


/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  mygames: state.MyGamesReducer.mygames,
  games: state.reducer.games,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllMyGames,
    addAllMyGames,
    getAllGames,
    addAllGames,
  }, dispatch),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

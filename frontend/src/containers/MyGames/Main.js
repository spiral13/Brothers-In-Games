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

/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  mygames: state.MyGamesReducer.mygames,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllMyGames, addAllMyGames }, dispatch),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

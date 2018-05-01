/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import MyGames from 'frontend/src/components/MyGames';

// actionsCreators
import { getAllMyGames, addAllMyGames } from 'frontend/src/store/reducer';

/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  games: state.reducer.games,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllGames, addAllGames }, dispatch),
});


// Container
const MyGamesContainers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyGames);

/*
 * Export
 */
export default MyGamesContainers;

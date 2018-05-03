/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import GameList from 'frontend/src/components/GameList';

// actionsCreators
import { getAllGames, addAllGames } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';


/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  games: state.reducer.games,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllGames, addAllGames, getAllFriends }, dispatch),
});


// Container
const GameListContainers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameList);

/*
 * Export
 */
export default GameListContainers;

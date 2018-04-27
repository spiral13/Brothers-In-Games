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
 import { getAllGames } from 'frontend/src/store/reducer';

/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  datas: state.games,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllGames }, dispatch),
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
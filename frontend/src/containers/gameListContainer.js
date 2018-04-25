/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
 import GameList from 'frontend/src/components/Gamelist';

// actionsCreators
 import { getAllGames, addAllGames} from 'frontend/src/store/reducer';

/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  games: state.games,
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({ getAllGames, addAllGames}, dispatch)
);


// Container
const LettersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Letters);

/*
 * Export
 */
export default LettersContainer;

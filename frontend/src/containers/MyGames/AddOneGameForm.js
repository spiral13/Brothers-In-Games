/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import AddOneGameForm from 'frontend/src/components/MyGames/AddOneGameForm';
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

const AddOneGameFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddOneGameForm);

/**
 * Export
 */
export default AddOneGameFormContainer;

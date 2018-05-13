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
import { getAllMyGames, addAllMyGames, changeFormGameSelected, submitSelectedGame } from 'frontend/src/store/reducers/MyGamesReducer';
import { getAllGames, addAllGames } from 'frontend/src/store/reducer';


/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  mygames: state.MyGamesReducer.mygames,
  allGames: state.reducer.allGames,
  selectedOption: state.MyGamesReducer.selectedOption,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllMyGames,
    addAllMyGames,
    getAllGames,
    addAllGames,
    changeFormGameSelected,
    submitSelectedGame,
  }, dispatch),
});

const AddOneGameFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddOneGameForm);

/**
 * Export
 */
export default AddOneGameFormContainer;

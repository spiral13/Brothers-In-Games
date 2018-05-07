/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import DeleteGameForm from 'frontend/src/components/MyGames/DeleteGameForm';
// actionsCreators
import { getAllMyGames, addAllMyGames, changeFormGameToDelete, submitGameToDelete } from 'frontend/src/store/reducers/MyGamesReducer';


/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  mygames: state.MyGamesReducer.mygames,
  selectedOptionToDelete: state.MyGamesReducer.selectedOptionToDelete,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllMyGames,
    addAllMyGames,
    changeFormGameToDelete,
    submitGameToDelete,
  }, dispatch),
});

const DeleteGameFormContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteGameForm);

/**
 * Export
 */
export default DeleteGameFormContainer;

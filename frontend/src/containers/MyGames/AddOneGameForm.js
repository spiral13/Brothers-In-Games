/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import AddOneGameForm from 'frontend/src/components/MyGames/AddOneGameForm';
/**
 * Code
 */

const mapStateToProps = state => ({
  mygames: state.MyGamesReducer.mygames,
});

const mapDispatchToProps = () => ({});

const AddOneGameFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddOneGameForm);

/**
 * Export
 */
export default AddOneGameFormContainer;

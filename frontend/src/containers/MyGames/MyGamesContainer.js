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


// Container
const MyGamesContainers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyGames);

/*
 * Export
 */
export default MyGamesContainers;

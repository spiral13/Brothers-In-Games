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
import { getAllGames, addAllGames } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';

/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  mygames: state.MyGamesReducer.mygames,
  loadings: state.LoadingReducer.loadings,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllMyGames,
    addAllMyGames,
    getAllFriends,
    getAllGames,
    addAllGames,
  }, dispatch),
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

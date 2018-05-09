/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import MyProfile from 'frontend/src/components/MyProfile';

// actionsCreators
import { getAllGames, addAllGames } from 'frontend/src/store/reducer';
import { getAllMyGames, addAllMyGames } from 'frontend/src/store/reducers/MyGamesReducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';


/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  games: state.reducer.games,
  friends: state.FriendsReducer.friends,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllGames,
    addAllGames,
    getAllFriends,
    getAllMyGames,
    addAllMyGames,
  }, dispatch),
});


// Container
const MyProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyProfile);

/*
 * Export
 */
export default MyProfileContainer;

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
import { getAllGames } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
import { getUserProfileInformation } from 'frontend/src/store/reducers/ProfileReducer';


/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  games: state.reducer.games,
  friends: state.FriendsReducer.friends,
  loadings: state.LoadingReducer.loadings,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllGames,
    getAllFriends,
    getUserProfileInformation,
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

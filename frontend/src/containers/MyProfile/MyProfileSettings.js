/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import MyProfileSettings from 'frontend/src/components/MyProfile/MyProfileSettings';

// actionsCreators
import { getAllGames } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';


/*
 * Code
 */
// State => composant
const mapStateToProps = (state, ownProps) => ({
  friends: state.FriendsReducer.friends,
  loadings: state.LoadingReducer.loadings,
  ownProps,

});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllGames,
    getAllFriends,
  }, dispatch),
});


// Container
const MyProfileSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyProfileSettings);

/*
 * Export
 */
export default MyProfileSettingsContainer;

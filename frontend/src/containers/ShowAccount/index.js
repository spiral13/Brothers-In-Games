/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import ShowAccount from 'frontend/src/components/ShowAccount';

// actionsCreators
import { getAllGames } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';

/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  loadings: state.LoadingReducer.loadings,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllFriends,
    getAllGames,
  }, dispatch),
});


// Container
const ShowAccountContainers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowAccount);

/*
 * Export
 */
export default ShowAccountContainers;

/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import Main from 'frontend/src/components/MyProfile/Main';
import { deleteFriend, changeOption, changeAddOneFriend, submitAddFriend } from 'frontend/src/store/reducers/FriendsReducer';

/*
 * Code
 */
const mapStateToProps = state => ({
  userInformation: state.FriendsReducer.friend,
  addOneFriend: state.FriendsReducer.addOneFriend,
  profileInformation: state.ProfileReducer.profileInformationChange,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    deleteFriend,
    changeOption,
    changeAddOneFriend,
    submitAddFriend,
  }, dispatch),
});

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

/*
 * Export
 */
export default MainContainer;

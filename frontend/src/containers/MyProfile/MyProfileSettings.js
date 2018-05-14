/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import MyProfileSettings from 'frontend/src/components/MyProfile/MyProfileSettings';
import { changeName, submitChange } from 'frontend/src/store/reducers/ProfileReducer';


/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  profileInformationChange: state.ProfileReducer.profileInformationChange,
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeName,
    submitChange,
  }, dispatch),
});

const MyProfileSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyProfileSettings);

/*
 * Export
 */
export default MyProfileSettingsContainer;

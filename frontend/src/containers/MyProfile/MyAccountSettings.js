/*
 * Import NPM
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Import Local
 */
import MyAccountSettings from 'frontend/src/components/MyProfile/MyAccountSettings';
import { changeName, submitChangePrivateInformation } from 'frontend/src/store/reducers/ProfileReducer';


/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  accountInformation: state.ProfileReducer.account,
  profileInformationChange: state.ProfileReducer.profileInformationChange,
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeName,
    submitChangePrivateInformation,
  }, dispatch),
});

const MyAccountSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccountSettings);

/*
 * Export
 */
export default MyAccountSettingsContainer;

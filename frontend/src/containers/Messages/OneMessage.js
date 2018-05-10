/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import OneMessage from 'frontend/src/components/Messages/ShowMessage/OneMessage';
import { redirect } from 'frontend/src/store/reducer';
import { hideResponse } from 'frontend/src/store/reducers/ResponseReducer';
import { getProfileAnnounce } from 'frontend/src/store/reducers/AnnouncementsReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  selectedMail: state.MessagesReducer.selectedMail,
  response: state.ResponseReducer.response,
  popup: state.ResponseReducer.popup,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect, hideResponse, getProfileAnnounce }, dispatch),
});

const OneMessageContainer = connect(mapStateToProps, mapDispatchToProps)(OneMessage);

/**
 * Export
 */
export default OneMessageContainer;

/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import OneMessage from 'frontend/src/components/Messages/ShowMessage/OneMessage';
import { changeProfileAnnounce } from 'frontend/src/store/reducers/AnnouncementsReducer';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  selectedMail: state.MessagesReducer.selectedMail,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect, changeProfileAnnounce }, dispatch),
});

const OneMessageContainer = connect(mapStateToProps, mapDispatchToProps)(OneMessage);

/**
 * Export
 */
export default OneMessageContainer;

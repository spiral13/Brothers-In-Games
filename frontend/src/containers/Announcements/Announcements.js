/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Announcements from 'frontend/src/components/Announcements';
import { addAllAnnouncements } from 'frontend/src/store/reducers/AnnouncementsReducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addAllAnnouncements }, dispatch),
});

const AnnouncementsContainer = connect(mapStateToProps, mapDispatchToProps)(Announcements);

/**
 * Export
 */
export default AnnouncementsContainer;

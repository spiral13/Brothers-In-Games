/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import RightSidebar from 'frontend/src/components/HomeMember/RightSidebar';
import { getAllActus } from 'frontend/src/store/reducer';
import { addAnnouncements } from 'frontend/src/store/reducers/AnnouncementsReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  actus: state.reducer.sidebarActus,
  playerNews: state.AnnouncementsReducer.announcements,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllActus, addAnnouncements }, dispatch),
});

const RightSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(RightSidebar);

/**
 * Export
 */
export default RightSidebarContainer;

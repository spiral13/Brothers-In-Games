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
/**
 * Code
 */

const mapStateToProps = state => ({
  actus: state.sidebarActus,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllActus }, dispatch),
});

const RightSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(RightSidebar);

/**
 * Export
 */
export default RightSidebarContainer;

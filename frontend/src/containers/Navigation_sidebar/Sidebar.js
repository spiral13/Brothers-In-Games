/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Sidebar from 'frontend/src/components/Navigation_sidebar/Sidebar';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

/**
 * Export
 */
export default SidebarContainer;

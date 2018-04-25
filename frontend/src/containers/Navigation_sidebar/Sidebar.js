/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Sidebar from 'frontend/src/components/Navigation_sidebar/Sidebar';
/**
 * Code
 */

const mapStateToProps = (state, ownProp) => ({});

const mapDispatchToProps = dispatch => ({
  // changeClick: () => {
  //   console.log('test');
  // },
});

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

/**
 * Export
 */
export default SidebarContainer;

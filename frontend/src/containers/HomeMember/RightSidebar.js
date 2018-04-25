/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import RightSidebar from 'frontend/src/components/HomeMember/RightSidebar';
/**
 * Code
 */

const mapStateToProps = (state, ownProp) => ({});

const mapDispatchToProps = dispatch => ({
  // changeClick: () => {
  //   console.log('test');
  // },
});

const RightSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(RightSidebar);

/**
 * Export
 */
export default RightSidebarContainer;

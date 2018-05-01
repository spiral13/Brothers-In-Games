/**
 * Npm import
 */
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Main from 'frontend/src/components/Announce/Main';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  // actions: bindActionCreators({ addMain }, dispatch),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

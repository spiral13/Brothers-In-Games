/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Main from 'frontend/src/components/HomeMember/Main';
/**
 * Code
 */

const mapStateToProps = (state, ownProp) => ({});

const mapDispatchToProps = dispatch => ({
  // changeClick: () => {
  //   console.log('test');
  // },
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

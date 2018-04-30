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

const mapStateToProps = state => ({
  news: state.reducer.news,
});

const mapDispatchToProps = () => ({
  // changeClick: () => {
  //   console.log('test');
  // },
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

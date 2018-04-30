/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Main from 'frontend/src/components/Announcements/Main';
/**
 * Code
 */

const mapStateToProps = state => ({
  datas: state.AnnouncementsReducer.announcements,
});

const mapDispatchToProps = () => ({});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

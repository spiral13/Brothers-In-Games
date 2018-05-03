/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Main from 'frontend/src/components/Announce/Main';
import { getProfileAnnounce } from 'frontend/src/store/reducers/AnnouncementsReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  datas: state.AnnouncementsReducer.profileAnnounce,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getProfileAnnounce }, dispatch),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

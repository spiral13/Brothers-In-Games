/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Banner from 'frontend/src/components/Announcements/Banner';
/**
 * Code
 */

const mapStateToProps = state => ({
  datas: state.AnnouncementsReducer.announcements,
});

const mapDispatchToProps = () => ({});

const BannerContainer = connect(mapStateToProps, mapDispatchToProps)(Banner);

/**
 * Export
 */
export default BannerContainer;

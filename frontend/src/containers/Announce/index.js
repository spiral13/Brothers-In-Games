/**
 * Npm import
 */
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Announce from 'frontend/src/components/Announce';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  // actions: bindActionCreators({ addAnnounce }, dispatch),
});

const AnnounceContainer = connect(mapStateToProps, mapDispatchToProps)(Announce);

/**
 * Export
 */
export default AnnounceContainer;

/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import HomeMember from 'frontend/src/components/HomeMember';
import { getAllNews } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllNews }, dispatch),
});

const HomeMemberContainer = connect(mapStateToProps, mapDispatchToProps)(HomeMember);

/**
 * Export
 */
export default HomeMemberContainer;

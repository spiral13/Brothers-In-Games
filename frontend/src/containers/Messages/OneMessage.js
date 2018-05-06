/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import OneMessage from 'frontend/src/components/Messages/ShowMessage/OneMessage';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const OneMessageContainer = connect(mapStateToProps, mapDispatchToProps)(OneMessage);

/**
 * Export
 */
export default OneMessageContainer;

/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import ResponseComponent from 'frontend/src/components/Announce/Contact/ResponseComponent';
import { getResponse, changeArea } from 'frontend/src/store/reducers/ResponseReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  textareaValue: state.ResponseReducer.textArea,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getResponse, changeArea }, dispatch),
});

const ResponseComponentContainer = connect(mapStateToProps, mapDispatchToProps)(ResponseComponent);

/**
 * Export
 */
export default ResponseComponentContainer;

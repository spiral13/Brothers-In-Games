/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Footer from 'frontend/src/components/Footer';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    redirect,
  }, dispatch),
});

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

/**
 * Export
 */
export default FooterContainer;

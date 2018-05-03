/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import App from 'frontend/src/components/App';
import { changeTypeRouting } from 'frontend/src/store/reducer';

/**
 * Code
 */

const mapStateToProps = state => ({
  redirect: state.reducer.redirect,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeTypeRouting }, dispatch),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

/**
 * Export
 */
export default AppContainer;

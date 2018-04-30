/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
* Local import
*/
import Aside from 'frontend/src/components/Article/Aside';

/**
 * Code
 */

const mapStateToProps = state => ({
  article: state.reducer.article,
});


const mapDispatchToProps = () => ({});

const AsideContainer = connect(mapStateToProps, mapDispatchToProps)(Aside);

/**
 * Export
 */
export default AsideContainer;

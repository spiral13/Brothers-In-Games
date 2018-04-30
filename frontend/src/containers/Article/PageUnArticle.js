/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
* Local import
*/
import PageUnArticle from 'frontend/src/components/Article/PageUnArticle';

/**
 * Code
 */

const mapStateToProps = state => ({
  article: state.Articlereducer.article,
});


const mapDispatchToProps = () => ({});

const PageUnArticleContainer = connect(mapStateToProps, mapDispatchToProps)(PageUnArticle);

/**
 * Export
 */
export default PageUnArticleContainer;

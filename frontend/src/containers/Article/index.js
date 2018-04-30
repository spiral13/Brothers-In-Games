/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Article from 'frontend/src/components/Article';
import { getArticle, addArticle } from 'frontend/src/store/reducers/ArticleReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  article: state.Articlereducer.article,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getArticle, addArticle }, dispatch),
});

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);

/**
 * Export
 */
export default ArticleContainer;

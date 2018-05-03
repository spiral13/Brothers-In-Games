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
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';

/**
 * Code
 */

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getArticle, addArticle, getAllFriends }, dispatch),
});

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);

/**
 * Export
 */
export default ArticleContainer;

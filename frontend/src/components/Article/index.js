/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Footer from 'frontend/src/containers/Footer';
import PageUnArticle from 'frontend/src/containers/Article/PageUnArticle';
import Loading from 'frontend/src/components/Loading';


/**
 * Code
 */

class Article extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  /*
   * Lifecycle
   */
  componentDidMount() {
    this.props.actions.getArticle();
    this.props.actions.getAllFriends();
    this.props.actions.getAllGames();
  }

  /*
   * Rendu
   */
  render() {
    const {
      loadingFriends,
      loadingGames,
      loadingArticle,
    } = this.props.loadings;
    if (!loadingFriends || !loadingGames || !loadingArticle) {
      return <Loading />;
    }
    return (
      <div className="pageArticle">
        <Sidebar />
        <div className="right-side">
          <Navbar />
          <PageUnArticle />
          <Footer />
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};


/**
 * Export
 */
export default Article;

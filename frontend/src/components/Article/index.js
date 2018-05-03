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
import PageUnArticle from 'frontend/src/containers/Article/PageUnArticle';
import Loading from 'frontend/src/components/Loading';


/**
 * Code
 */

class Article extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  state = {
    loading: true,
  }

  /*
   * Lifecycle
   */
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
    this.props.actions.getArticle();
    this.props.actions.getAllFriends();
  }

  /*
   * Rendu
   */
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="pageArticle">
        <Navbar />
        <Sidebar />
        <PageUnArticle />
      </div>
    );
  }
}

Article.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/**
 * Export
 */
export default Article;

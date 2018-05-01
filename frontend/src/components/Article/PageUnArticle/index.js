/**
 * Npm import
 */
import React from 'react';
// import Gamepad from 'react-icons/lib/fa/gamepad';
import PropTypes from 'prop-types';
// import Aside from 'frontend/src/containers/Article/Aside';

/**
* Local import
*/

/**
 * Code
 */
class PageUnArticle extends React.PureComponent {
  render() {
    const { article } = this.props;
    return (
      <main className="containerArticle">
        <div className="article">

          <div className="containerH1etImageArticle">
            <div className="categorie">article</div>
            <img src={article.image} alt={article.title} className="imageArticle" />
            <h1 className="title">{article.title}</h1>
            <p className="publicationDate">{article.published}</p>
          </div>

          <article className="contenuArticle">
            <p className="texteArticle" >
              {article.content}
            </p>
          </article>
          {/* <Aside /> */}
        </div>
      </main>
    );
  }
}

PageUnArticle.propTypes = {
  article: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  // description: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default PageUnArticle;

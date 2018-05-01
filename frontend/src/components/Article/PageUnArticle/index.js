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
    console.log(article);
    return (
      <main className="containerArticle">
        <div className="article">

          <div className="containerH1etImageArticle">
            <div className="categorie">article</div>
            <img src={article[0].image} alt={article[0].title} className="imageArticle" />
            <h1 className="title">{article[0].title}</h1>
            <p className="publicationDate">{article[0].published}</p>
          </div>

          <article className="contenuArticle">
            <p className="texteArticle" >
              {article[0].content}
            </p>
          </article>
          {/* <Aside /> */}
        </div>
      </main>
    );
  }
}

PageUnArticle.propTypes = {
  article: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  // description: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default PageUnArticle;

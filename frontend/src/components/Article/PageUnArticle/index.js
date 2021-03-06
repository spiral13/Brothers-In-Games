/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
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
            <img src={article[0].image} alt={article[0].title} className="imageArticle" />
            <h1 className="title">{article[0].title}</h1>
            <p className="publicationDate">{article[0].published.date}</p>
          </div>

          <article className="contenuArticle">
            <p className="texteArticle" >
              {article[0].content}
            </p>
          </article>
        </div>
      </main>
    );
  }
}

PageUnArticle.propTypes = {
  article: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};


/**
 * Export
 */
export default PageUnArticle;

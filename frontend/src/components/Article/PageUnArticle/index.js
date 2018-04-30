/**
 * Npm import
 */
import React from 'react';
// import Gamepad from 'react-icons/lib/fa/gamepad';
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
            <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt={article.title} className="imageArticle" />
            <h1 className="title">{article.title}</h1>
            <p className="publicationDate">Date et heure publication</p>
          </div>

          <article className="contenuArticle">
            <p className="introArticle" >Intro de l'article</p>
            <p className="texteArticle" >
              {article.info}
            </p>
          </article>

          <aside>
            <h2>------ Ces articles peuvent aussi vous intéresser ------</h2>
            <div className="carousel" >
              <div className="unArticleCarousel" >
                <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Legend 1" className="imageCarouselArticle" />
                <h3 className="legendImageCarousel">1</h3>
              </div>
              <div className="unArticleCarousel" >
                <img src="http://blogmoon.b.l.pic.centerblog.net/78c3200a.jpg" alt="Legend 2" className="imageCarouselArticle" />
                <h3 className="legendImageCarousel">2</h3>
              </div>
              <div className="unArticleCarousel" >
                <img src="https://i.pinimg.com/736x/ea/26/83/ea2683862269b0db04f8b8e0a1845cbd--scottish-fold-funny-pics.jpg" alt="Legend 3" className="imageCarouselArticle" />
                <h3 className="legendImageCarousel">3</h3>
              </div>
              <div className="unArticleCarousel" >
                <img src="https://i.pinimg.com/736x/ea/26/83/ea2683862269b0db04f8b8e0a1845cbd--scottish-fold-funny-pics.jpg" alt="Legend 4" className="imageCarouselArticle" />
                <h3 className="legendImageCarousel">4</h3>
              </div>
            </div>
          </aside>

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

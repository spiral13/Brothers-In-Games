/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Loading from 'frontend/src/components/Loading';


/**
 * Code
 */

class Article extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  state = {
    loading: false,
  }

  /*
   * Lifecycle
   */
  // componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({ loading: false });
  //   }, 2000);
  //   this.props.actions.getAllGames();
  // }

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
        <main className="containerArticle">
          <div className="article">

            <div className="containerH1etImageArticle">
              <div className="categorie">article</div>
              <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Titre de l'article" className="imageArticle" />
              <h1 className="title">Titre de l'article</h1>
              <p className="publicationDate">Date et heure publication</p>
            </div>

            <article className="contenuArticle">
              <p className="introArticle" >Intro de l'article</p>
              <p className="texteArticle" >
                Corps de l'article: Ornanemta vero armatum atque signa Pontum affervescentem
              </p>
            </article>

            {/* <aside className="carousel">
            <h2>Ces articles peuvent aussi vous intéresser</h2>
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
  </aside> */}
          </div>
        </main>
      </div>
    );
  }
}

// Article.propTypes = {
//   actions: PropTypes.object.isRequired,
// };


/**
 * Export
 */
export default Article;

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
import Loading from 'frontend/src/components/Loading';
import { Carousel } from 'react-responsive-carousel';

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
        <main className="article">
          <h1 className="title">Titre de l'article</h1>
          <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Titre de l'article" className="imageArticle" />
          <section className="contenuArticle">
            <p>blablabla article whaouh !</p>
          </section>

          <Carousel className="carousel">
            <div className="unArticleCarousel">
              <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Legend 1" className="imageCarouselArticle" />
              <p className="legendImageCarousel">Legend 1</p>
            </div>
            <div>
              <img src="http://blogmoon.b.l.pic.centerblog.net/78c3200a.jpg" alt="Legend 2" />
              <p className="legendImageCarousel">Legend 2</p>
            </div>
            <div>
              <img src="https://i.pinimg.com/736x/ea/26/83/ea2683862269b0db04f8b8e0a1845cbd--scottish-fold-funny-pics.jpg" alt="Legend 2" />
              <p className="legendImageCarousel">Legend 3</p>
            </div>
          </Carousel>
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

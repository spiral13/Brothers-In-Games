/**
 * Npm import
 */
import React from 'react';
// import Gamepad from 'react-icons/lib/fa/gamepad';
import PropTypes from 'prop-types';

/**
* Local import
*/
import Aside from 'frontend/src/components/Article/Aside';
/**
 * Code
 */
const PageUnArticle = () => (
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
      <Aside />
    </div>
  </main>
);

// Game.propTypes = {
//   game: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   // description: PropTypes.string.isRequired,
// };


/**
 * Export
 */
export default PageUnArticle;

/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
/**
* Local import
*/

/**
 * Code
 */
const Main = () => (
  <div id="ContainerMyGamesList">

    <div id="infoIdentityProfile">
      <img id="photoProfileOnMyGames" src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Toto" />
      <h1 id="profileNameOnMyGames">Liste de jeux de Toto</h1>
    </div>

    <section id="sectionListingMyGames">
      <div id="settings">
        <h2 id="title">Vos jeux</h2>
        <div id="triggerLegend">Ajouter un nouveau jeu à votre liste</div>
        <span id="trigger"> + </span>
      </div>
      <div id="triggeredAddOneGameForm">
        <form id="addOneGameForm">
          <input
            type="text"
            placeholder="Ajouter un nouveau jeu à votre liste"
          />
        </form>
      </div>

      <div id="containerAllMyGames">
        <div id="oneOfMyGame">
          <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="titre du jeu" id="oneOfMyGamePicture" />
          <h2 id="oneOfMyGameTitle">titre du jeu</h2>
        </div>
      </div>
    </section>
  </div>
);
// Main.propTypes = {
//   games: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
// };
/**
 * Export
 */
export default Main;

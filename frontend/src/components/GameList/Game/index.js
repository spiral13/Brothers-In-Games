/**
 * Npm import
 */
import React from 'react';
// import Gamepad from 'react-icons/lib/fa/gamepad';

/**
* Local import
*/

/**
 * Code
 */
const Game = () => (
  <div id="game">
    <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Titre du jeu" id="gamePicture"/>
    {/* <Gamepad className="nav-fig" id="gamePicture"/> */}
    <h2 id="gameTitle">Titre du jeu</h2>
    <p id="gameInfo">130 personnes recherchent des joueurs</p>
  </div>
);
/**
 * Export
 */
export default Game;

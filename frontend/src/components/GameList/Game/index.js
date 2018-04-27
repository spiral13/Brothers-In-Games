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
const Game = ({ game }) => (
  <div className="game">
    <img src={game.cover} alt={game.title} id="gamePicture" />
    <h2 id="gameTitle">{game.title}}</h2>
    <p id="gameInfo">0</p>
  </div>
);

Game.propTypes = {
  game: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  // description: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default Game;

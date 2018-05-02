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
const Game = ({ game }) => (
  <div id="game">
    <img src={game.cover} alt={game.title} id="gamePicture" />
    <h2 id="gameTitle">{game.title}</h2>
    <p id="gameInfo">0</p>
  </div>
);

Game.propTypes = {
  game: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


/**
 * Export
 */
export default Game;

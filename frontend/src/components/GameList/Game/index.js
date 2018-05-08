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
    <div id="game-wrap">
      <img src={game.cover} alt={game.title} id="gamePicture" />
    </div>
  	<h2 id="game-title">{game.title}</h2>
  	<p id="game-info">0</p>
  </div>
);

Game.propTypes = {
  game: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default Game;

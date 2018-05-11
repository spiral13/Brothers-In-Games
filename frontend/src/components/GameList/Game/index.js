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
const style = {
  image: {
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 0%',
    width: '100%',
  },
};

const Game = ({ game }) => (
  <div id="game">
    <div id="game-wrap">
      <img src={game.cover} alt={game.title} id="gamePicture" style={style.image} />
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

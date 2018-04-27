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
const Game = ({ title, cover, description }) => (
  <div className="game">
    <img src={cover} alt={title} id="gamePicture" />
    {/* <Gamepad className="nav-fig" id="gamePicture"/> */}
    <h2 id="gameTitle">{title}</h2>
    <p id="gameInfo">{description}</p>
  </div>
);

Game.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default Game;

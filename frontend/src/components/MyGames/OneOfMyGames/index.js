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
const OneOfMyGames = ({ mygame }) => (
  <div id="oneOfMyGame">
    <img src={mygame.cover} alt={mygame.title} id="oneOfMyGamePicture" />
    <h2 id="oneOfMyGameTitle">{mygame.title}</h2>
  </div>
);

OneOfMyGames.propTypes = {
  mygame: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};


/**
 * Export
 */
export default OneOfMyGames;

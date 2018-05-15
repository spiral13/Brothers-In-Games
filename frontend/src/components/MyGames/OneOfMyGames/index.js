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
    <div id="oneOfMyGame-wrap">
    	<img src={mygame.cover} alt={mygame.title} id="oneOfMyGamePicture" className="resize-pic" />
   	</div>
   	<div id="oneOfMyGame-info">
    	<h2 id="oneOfMyGame-title">{mygame.title}</h2>
    </div>
  </div>
);

OneOfMyGames.propTypes = {
  mygame: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default OneOfMyGames;

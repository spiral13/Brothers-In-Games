/*
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
const Announce = ({ name, image, description }) => (
  <div className="announce">
    <a href="#">
      <img className="player-image" src={image} alt="image de profil" />
      <div className="player-announce">
        <h2 className="player-name">{name}</h2>
        {/* eslint-disable-next-line */}
        <p>{description}</p>
      </div>
    </a>
  </div>
);

Announce.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

Announce.defaultProps = {
  name: 'Jean pierre',
  image: '#',
  description: 'lorem ipsum',
};
/**
 * Export
 */
export default Announce;

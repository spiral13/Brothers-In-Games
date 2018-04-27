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
  <div className="banner">
    <a href="#">
      <h2>{name}</h2>
      {/* eslint-disable-next-line */}
      <img src={image} alt="image de profil" />
      <p>{description}</p>
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

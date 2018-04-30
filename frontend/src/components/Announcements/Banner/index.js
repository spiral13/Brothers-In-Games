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
const style = image => ({
  backgroundImage: `url(${image})`,
});

const Banner = ({ title, image }) => (
  <div className="banner" style={style(image)}>
    <p className="pre-title-games">Recherche de joueur sur :</p>
    <h2 className="game-title">{title}</h2>
    <p className="number-of-search">{/* nombres d'annonces */} Annonces</p>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

Banner.defaultProps = {
  title: 'League of Legends',
  image: '',
};
/**
 * Export
 */
export default Banner;

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
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

const Banner = ({ datas, type }) => (
  <div className="banner" style={type === false ? style(datas[0].cover) : { marginLeft: '0px' }}>
    <div className="banner-container" style={type ? { marginLeft: '0px' } : { marginLeft: '130px' }}>
      <p className="pre-title-games">Recherche de joueur sur :</p>
      <h2 className="game-title">{type === false ? datas[0].title : 'Tout les jeux'}</h2>
      <p className="number-of-search">{/* nombres d'annonces */} Annonces</p>
    </div>
  </div>
);

Banner.propTypes = {
  type: PropTypes.bool.isRequired,
  datas: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Banner;

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
    <a href="">{title}</a>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Banner;

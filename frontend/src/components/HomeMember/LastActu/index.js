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

const LastActu = ({ title, image }) => (
  <div className="lastActu" style={style(image)}>
    <a href="">{title}</a>
  </div>
);

LastActu.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default LastActu;

/*
 * Npm import
 */
import React from 'react';
/**
* Local import
*/

/**
 * Code
 */
const style = (image) => {
  return ({
    backgroundImage: `url(${image})`,
  });
};

const LastActu = ({ title, image }) => (
  <div className="lastActu" style={style(image)}>
    <a href="">{title}</a>
  </div>
);
/**
 * Export
 */
export default LastActu;

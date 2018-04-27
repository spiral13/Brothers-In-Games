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
const Content = ({ index, content }) => {
  let style = 'content-new';
  // if (index === 0) {
  //   style += " first";
  // }
  if (index >= 0 && index < 5) {
    style += ' middle';
  }
  if (index >= 5 && index < 10) {
    style += ' last';
  }
  return (
    <div className={style}>
      <img src={content.image} alt={content.title} />
      <div className="presentation">
        <h3>{content.title}</h3>
        <p>Description de l'image</p>
      </div>
    </div>
  );
};

Content.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Content;

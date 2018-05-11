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
const Content = ({ content }) => (
  <div className="content-new middle">
    <img src={content.image} alt={content.title} className="resize-pic" />
    <div className="presentation">
      <h3>{content.title}</h3>
    </div>
  </div>
);

Content.propTypes = {
  content: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Content;

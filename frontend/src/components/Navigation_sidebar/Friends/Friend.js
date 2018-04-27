/**
 * Npm import
 */
import React from 'react';
import Message from 'react-icons/lib/fa/envelope';
import PropTypes from 'prop-types';
/**
* Local import
*/

/**
 * Code
 */
const Friend = ({ name }) => (
  <div className="friend">
    <h3 className="friend-name">{name}</h3>
    <Message />
  </div>
);

Friend.propTypes = {
  name: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Friend;

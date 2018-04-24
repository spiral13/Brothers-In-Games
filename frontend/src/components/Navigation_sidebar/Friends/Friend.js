/**
 * Npm import
 */
import React from 'react';
import Message from 'react-icons/lib/fa/envelope';
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
/**
 * Export
 */
export default Friend;

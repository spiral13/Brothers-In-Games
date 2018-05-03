/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Friend from 'frontend/src/components/Navigation_sidebar/Friends/Friend';
/**
 * Code
 */
const Friends = ({ datas }) => (
  <div id="friends">
    {/* A l'avenir, nous aurons un map de tout nos amis. */}
    <h2>Friends</h2>
    {datas[0].myFriend.map(friend => <Friend key={friend.id} name={friend.username} />)}
  </div>
);
Friends.propTypes = {
  datas: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Friends;

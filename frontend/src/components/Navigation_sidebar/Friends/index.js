/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import Friend from 'frontend/src/components/Navigation_sidebar/Friends/Friend';
/**
 * Code
 */
const Friends = () => (
  <div id="friends">
    {/* A l'avenir, nous aurons un map de tout nos amis. */}
    <h2>Friends</h2>
    <Friend name="Jean pierre" />
    <Friend name="Pigeon" />
    <Friend name="OKKAYY" />
    <Friend name="Oxiii" />
  </div>
);
/**
 * Export
 */
export default Friends;

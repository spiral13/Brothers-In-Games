/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import Sidebar from 'frontend/src/components/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/components/Navigation_sidebar/Navbar';
/**
 * Code
 */
const GameList = () => (
  <div id="gameList">
    <Navbar />
    <Sidebar />
  </div>
);
/**
 * Export
 */
export default GameList;

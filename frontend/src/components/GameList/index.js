/*
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import Sidebar from 'frontend/src/components/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/components/Navigation_sidebar/Navbar';
import Game from 'frontend/src/components/GameList/Game';
/**
 * Code
 */
const GameList = () => (
  <div id="gameList">
    <Navbar />
    <Sidebar />
    <main id="games">
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
    </main>
  </div>
);
/**
 * Export
 */
export default GameList;

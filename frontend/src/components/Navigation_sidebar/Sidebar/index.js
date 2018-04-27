/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import Friends from 'frontend/src/components/Navigation_sidebar/Friends';
/**
 * Code
 */
const Sidebar = () => (
  <div id="sidebar">
    <h1 id="sidebar-title"><a href={Routing.generate('home_user')}>Brothers<br /><span><i>in</i>Games</span></a></h1>
    <h2 id="sidebar-username">Robert Gudule</h2>
    <form id="sidebar-form">
      <label id="sidebar-label" htmlFor="sidebar-input">Chercher un jeu / ami</label>
      <input id="sidebar-input" type="text" value="" placeholder="Recherche de joueurs/jeux" />
    </form>
    <Friends />
  </div>
);
/**
 * Export
 */
export default Sidebar;

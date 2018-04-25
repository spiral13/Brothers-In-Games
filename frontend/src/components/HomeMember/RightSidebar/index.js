/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import LastActu from 'frontend/src/components/HomeMember/LastActu';
/**
 * Code
 */
const RightSidebar = () => (
  <div id="rightSidebar">
    <div id="rightBar-rubrique">
      <a href="#" className="selected-bar">Dernières actualités</a>
      <a href="#">Activités des joueurs</a>
    </div>
    <LastActu />
  </div>
);
/**
 * Export
 */
export default RightSidebar;

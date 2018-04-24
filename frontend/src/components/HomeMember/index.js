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
const HomeMember = () => (
  <div id="homeMember">
    <Navbar />
    <Sidebar />
  </div>
);
/**
 * Export
 */
export default HomeMember;

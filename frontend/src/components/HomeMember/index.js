/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import Sidebar from 'frontend/src/components/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/components/Navigation_sidebar/Navbar';
import Main from 'frontend/src/components/HomeMember/Main';
import RightSidebar from 'frontend/src/components/HomeMember/RightSidebar';
/**
 * Code
 */
const HomeMember = () => (
  <div id="homeMember">
    <Navbar />
    <Sidebar />
    <Main />
    <RightSidebar />
  </div>
);
/**
 * Export
 */
export default HomeMember;

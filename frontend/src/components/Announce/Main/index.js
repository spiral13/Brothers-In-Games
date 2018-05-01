/*
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import Banner from 'frontend/src/containers/Announcements/Banner';
import Contact from 'frontend/src/components/Announce/Contact';
import ContactProfile from 'frontend/src/components/Announce/Contact/ContactProfile';
/**
 * Code
 */
const Main = () => (
  <div className="announcement-main">
    <Banner type />
    <Contact />
    <ContactProfile />
  </div>
);
/**
 * Export
 */
export default Main;

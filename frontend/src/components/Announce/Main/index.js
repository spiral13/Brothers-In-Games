/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Banner from 'frontend/src/containers/Announcements/Banner';
import Contact from 'frontend/src/components/Announce/Contact';
import ContactProfile from 'frontend/src/components/Announce/Contact/ContactProfile';
/**
 * Code
 */
const Main = ({ datas }) => (
  <div className="announcement-main">
    <Banner type />
    <Contact datas={datas[0]} />
    <ContactProfile datas={datas[0]} />
  </div>
);
Main.propTypes = {
  datas: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Main;

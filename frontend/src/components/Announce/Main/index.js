/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Banner from 'frontend/src/components/Announcements/Banner';
import Contact from 'frontend/src/components/Announce/Contact';
import ContactProfile from 'frontend/src/components/Announce/Contact/ContactProfile';
/**
 * Code
 */
const Main = ({ datas }) => {
  const newDatas = [{
    title: datas[0].game.title,
    cover: datas[0].game.cover,
  }];
  return (
    <div className="announcement-main">
      <Banner type={false} datas={newDatas} />
      <Contact datas={datas[0]} />
      <ContactProfile datas={datas[0]} />
    </div>
  );
};
Main.propTypes = {
  datas: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Main;

/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Announce from 'frontend/src/containers/Announcements/Announce';
import Banner from 'frontend/src/containers/Announcements/Banner';
/**
 * Code
 */
const Main = ({ datas }) => {
  let errors = 0;
  if (datas.length === 0) return <div className="announcementsNotFound"><p>No announcements for this game</p></div>;
  datas.forEach((data) => {
    if (datas[0].slug !== data.slug) errors += 1;
  });
  return (
    <div className="announcement-main">
      {errors !== 0 ? <Banner type /> : <Banner type={false} />}
      <div id="list_announce">
        {datas.map(data => (
          <Announce
            key={data[0].id}
            id={data[0].id}
            content={data[0].content}
            {...data}
          />
        ))}
      </div>
    </div>
  );
};

Main.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/**
 * Export
 */
export default Main;

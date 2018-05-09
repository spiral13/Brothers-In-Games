/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Announce from 'frontend/src/containers/Announcements/Announce';
/**
* Local import
*/
/**
 * Code
 */
const Main = ({ datas }) => (
  <div id="list_announce">
    {datas.map(data => (
      <Announce
        key={`MyAnnouncementKey${data[0].id}`}
        id={data[0].id}
        content={data[0].content}
        {...data}
      />
    ))}
  </div>
);
Main.propTypes = {
  datas: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Main;

/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Announce from 'frontend/src/components/Announcements/Announce';
/**
 * Code
 */
const Main = ({ datas }) => (
  <div className="announcement-main">
    {datas.map(data => (
      <Announce
        name={data.name}
        image={data.image}
        description={data.description}
      />
    ))}
  </div>
);

Main.propTypes = {
  datas: PropTypes.object,
};

Main.defaultProps = {
  datas: [
    {
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
    },
    {
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
    },
  ],
};
/**
 * Export
 */
export default Main;

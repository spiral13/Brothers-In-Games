/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Announce from 'frontend/src/components/Announcements/Announce';
import Banner from 'frontend/src/components/Announcements/Banner';
/**
 * Code
 */
const Main = ({ datas }) => (
  <div className="announcement-main">
    <Banner />
    <div id="list_announce">
      {datas.map(data => (
        <Announce
          key={data.id}
          name={data.name}
          image={data.image}
          description={data.description}
        />
      ))}
    </div>
  </div>
);

Main.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object),
};

Main.defaultProps = {
  datas: [
    {
      id: 1,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
    },
    {
      id: 2,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
    },
    {
      id: 3,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
    },
    {
      id: 4,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
    },
    {
      id: 5,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
    },
    {
      id: 6,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
    },
    {
      id: 7,
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

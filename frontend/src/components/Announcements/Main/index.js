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
      {datas.map(data => <Announce key={data.id} {...data} />)}
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
      slug: 'league-of-legends',
    },
    {
      id: 2,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
      slug: 'overwatch',
    },
    {
      id: 3,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
      slug: 'final-fantasy-XVI',
    },
    {
      id: 4,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
      slug: 'overwatch',
    },
    {
      id: 5,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
      slug: 'overwatch',
    },
    {
      id: 6,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
      slug: 'overwatch',
    },
    {
      id: 7,
      name: 'Jean pierre',
      image: '#',
      description: 'Cette description vient de <Main />',
      slug: 'overwatch',
    },
  ],
};
/**
 * Export
 */
export default Main;

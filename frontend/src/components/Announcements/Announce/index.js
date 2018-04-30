/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/

/**
 * Code
 */

const Announce = ({
  name,
  image,
  description,
  id,
  slug,
}) => (
  <div className="announce">
    {/* Le slug sera à changer. */}
    {/* eslint-disable-next-line */}
    <a href={Routing.generate('announcements_show', { slug: slug, id: id })}>
      {/* eslint-disable-next-line */}
      <img className="player-image" src={image} alt="image de profil" />
      <div className="player-announce">
        <h2 className="player-name">{name}</h2>
        {/* eslint-disable-next-line */}
        <p>{description}</p>
      </div>
    </a>
  </div>
);

Announce.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  slug: PropTypes.string,
};

Announce.defaultProps = {
  name: 'Jean pierre',
  image: '#',
  description: 'lorem ipsum',
  slug: 'overwatch',
};
/**
 * Export
 */
export default Announce;

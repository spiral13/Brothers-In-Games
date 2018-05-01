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
  username,
  image,
  title,
  slug,
  id,
  content,
}) => (
  <div className="announce">
    {/* Le slug sera à changer. */}
    {/* eslint-disable-next-line */}
    <a href={Routing.generate('announcements_show', { slug: slug, id: id })}>
      {/* eslint-disable-next-line */}
      <img className="player-image" src={image} alt="image de profil" />
      <div className="player-announce">
        <h2 className="player-name">{title} - {username}</h2>
        {/* eslint-disable-next-line */}
        <p className="contentContain">{content}</p>
      </div>
    </a>
  </div>
);

Announce.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
/**
 * Export
 */
export default Announce;

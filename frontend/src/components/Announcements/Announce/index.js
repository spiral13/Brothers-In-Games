/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'react-icons/lib/fa/circle';
import Classnames from 'classnames';
/**
* Local import
*/

/**
 * Code
 */

const Announce = ({
  user,
  image,
  content,
  id,
  game,
}) => (
  <div className="announce">
    {/* Le slug sera à changer. */}
    {/* eslint-disable-next-line */}
    <a href={Routing.generate('announcements_show', { slug: game.slug, id: id })}>
      {/* eslint-disable-next-line */}
      <img className="player-image" src={image} alt="image de profil" />
      <div className="player-announce">
        <h2 className="player-name">{user.username} - {game.title} <Circle className={Classnames({ green: user.isActive })} /></h2>
        {/* eslint-disable-next-line */}
        <p className="contentContain">{content}</p>
      </div>
    </a>
  </div>
);

Announce.propTypes = {
  user: PropTypes.object,
  image: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number.isRequired,
  game: PropTypes.object,
};

Announce.defaultProps = {
  user: 'Jean pierre',
  image: '#',
  content: 'lorem ipsum',
  game: 'overwatch',
};
/**
 * Export
 */
export default Announce;

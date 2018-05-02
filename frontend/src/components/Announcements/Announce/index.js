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

class Announce extends React.Component {
  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  render() {
    const {
      username,
      image,
      title,
      slug,
      id,
      content,
    } = this.props;
    return (
      <div className="announce">
        <a href="#" onClick={() => this.redirection(`/app_dev.php/announcement/${id}/${slug}`)}>
          <image className="player-image" src={image} alt="image de profil" />
          <div className="player-announce">
            <h2 className="player-name">{title} - {username}</h2>
            <p className="contentContain">{content}</p>
          </div>
        </a>
      </div>
    );
  }
}

Announce.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Announce;

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
const style = image => ({
  backgroundImage: `url(${image})`,
});

const LastActu = ({
  title,
  image,
  slug,
  id,
  type,
  username,
}) => (
  <div className="lastActu" style={style(image)}>
    {type === 'announcements' ?
      <a href={Routing.generate('announcements_list', { slug, id })}>{<span className="navbarRange-title">{title} - {username}</span>}</a>
    :
      <a href={Routing.generate('article_show', { id, slug })}>{title}</a>
    }
  </div>
);

LastActu.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  username: PropTypes.string,
};

LastActu.defaultProps = {
  username: 'Not defined',
};
/**
 * Export
 */
export default LastActu;

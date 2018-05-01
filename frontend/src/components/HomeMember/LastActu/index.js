/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
// import Circle from 'react-icons/lib/fa/circle';
// import Classnames from 'classnames';
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
    {/* <a href={Routing.generate('announcements_list', { slug, id })}>{<span className="navbarRange-title">{title} - {username}</span>} <Circle className={Classnames({ green: isActive })} /></a> */}
    {type === 'announcements' ?
      <a href={Routing.generate('announcements_list', { slug, id })}>{<span className="navbarRange-title">{title} - {username}</span>}</a>
    :
      <a href={Routing.generate('article_show', { slug, id })}>{title}</a>
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

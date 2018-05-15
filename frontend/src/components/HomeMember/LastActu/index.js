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

class LastActu extends React.Component {
  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  render() {
    return (
      <div className="lastActu resize-pic" style={style(this.props.image)}>
        {this.props.type === 'announcements' ?
          <a onClick={() => this.redirection(`/announcement/${this.props.id}/${this.props.slug}`)}>{<span className="navbarRange-title">{this.props.title} - {this.props.ownProps.username}</span>}</a>
        :
          <a onClick={() => this.redirection(`/article/${this.props.id}/${this.props.slug}`)}>{this.props.title}</a>
        }
      </div>
    );
  }
}

LastActu.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  username: PropTypes.string,
  actions: PropTypes.object.isRequired,
};

LastActu.defaultProps = {
  username: 'Not defined',
};
/**
 * Export
 */
export default LastActu;

/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Content from 'frontend/src/components/HomeMember/Main/Content';
/**
 * Code
 */
class Main extends React.Component {
  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  render() {
    return (
      <div id="main-member">
        {this.props.news.map(newContent => (
          <a href="#" onClick={() => this.redirection(`/app_dev.php/article/${newContent.id}/${newContent.slug}`)}>
            <Content
              key={`${newContent.id} news-member`}
              content={newContent}
            />
          </a>
        ))}
      </div>
    );
  }
}

Main.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Main;

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
const Main = ({ news }) => (
  <div id="main-member">
    {news.map(newContent => (
      // eslint-disable-next-line
      <a href={Routing.generate('article_show', { id: newContent.id, slug: newContent.slug })}>
        <Content
          key={`${newContent.id} news-member`}
          content={newContent}
        />
      </a>
    ))}
  </div>
);

Main.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/**
 * Export
 */
export default Main;

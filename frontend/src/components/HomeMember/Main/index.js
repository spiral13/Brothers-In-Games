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
    {news.map((newContent, index) => (
      <Content
        index={index}
        key={newContent.id}
        content={newContent}
      />
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

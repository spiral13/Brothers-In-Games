/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import Content from 'frontend/src/components/HomeMember/Main/Content';
/**
 * Code
 */
class Main extends React.Component {
  render() {
    const { news } = this.props;
    return (
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
  }
}
/**
 * Export
 */
export default Main;

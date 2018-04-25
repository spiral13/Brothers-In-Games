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

  componentWillMount() {
    console.log('ok');
    this.tab = this.props.news.data;
  }

  render() {
    const { news } = this.props;
    this.tab = ['test', 'test'];
    return (
      <div id="main-member">
        {this.tab.map((news) => (
          <Content key={news.id} />
        ))}
      </div>
    );
  }
}
/**
 * Export
 */
export default Main;

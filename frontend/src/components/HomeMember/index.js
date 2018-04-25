/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Main from 'frontend/src/containers/HomeMember/Main';
import RightSidebar from 'frontend/src/containers/HomeMember/RightSidebar';
/**
 * Code
 */
class HomeMember extends React.Component {
  componentWillMount() {
    this.props.actions.getAllNews();
  }

  render() {
    return (
      <div id="homeMember">
        <Navbar />
        <Sidebar />
        <Main />
        <RightSidebar />
      </div>
    );
  }
}
/**
 * Export
 */
export default HomeMember;

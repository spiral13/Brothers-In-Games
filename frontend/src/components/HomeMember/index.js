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
import Loading from 'frontend/src/components/Loading';
/**
 * Code
 */
class HomeMember extends React.Component {
  state = {
    loading: true,
  }

  componentWillMount () {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    this.props.actions.getAllNews();
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
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
}
/**
 * Export
 */
export default HomeMember;

/**
 * Npm import
 */
import React from 'react';
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Loading from 'frontend/src/components/Loading';
import Main from 'frontend/src/containers/Announce/Main';
/**
* Local import
*/

/**
 * Code
 */
class Announce extends React.Component {
  state = {
    loading: true,
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div id="announcement">
        <Sidebar />
        <Navbar />
        <Main />
      </div>
    );
  }
}
/**
 * Export
 */
export default Announce;

/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Loading from 'frontend/src/components/Loading';
import Banner from 'frontend/src/components/Announcements/Banner';
import Main from 'frontend/src/components/Announcements/Main';
/**
 * Code
 */
class Announcements extends React.Component {
  state = {
    loading: true,
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
    console.log('Announcement OK');
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div id="announcement">
        <Sidebar />
        <Navbar />
        <Banner />
        <Main />
      </div>
    );
  }
}

// Announcements.propTypes = {
//
// };
/**
 * Export
 */
export default Announcements;

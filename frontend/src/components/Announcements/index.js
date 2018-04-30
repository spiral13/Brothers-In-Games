/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Loading from 'frontend/src/components/Loading';
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
    }, 2000);
    console.log('Announcement OK');
    this.props.actions.addAllAnnouncements();
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
Announcements.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
// Announcements.propTypes = {
//
// };
/**
 * Export
 */
export default Announcements;

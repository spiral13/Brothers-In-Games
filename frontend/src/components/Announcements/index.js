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
import Main from 'frontend/src/containers/Announcements/Main';
/**
 * Code
 */
class Announcements extends React.Component {
  state = {
    loading: true,
    load: true,
  }

  componentWillMount() {
    if (this.state.load) {
      setTimeout(() => {
        this.setState({ loading: false, load: false });
      }, 2000);
      this.props.actions.addAnnouncements();
      this.props.actions.getAllFriends();
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div id="announcement">
        <Sidebar />
        <div className="right-side">
          <Navbar />
          <Main />
        </div>
      </div>
    );
  }
}
Announcements.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
/**
 * Export
 */
export default Announcements;

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
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    this.props.actions.addAnnouncements();
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
/**
 * Export
 */
export default Announcements;

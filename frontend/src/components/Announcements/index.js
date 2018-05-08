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
  componentDidMount() {
    this.props.actions.changeAnnouncementsToFalse();
    this.props.actions.getAllFriends();
    this.props.actions.getAllGames();
    this.props.actions.addAnnouncements();
  }

  render() {
    const {
      loadingFriends,
      loadingGames,
      loadingAnnouncements,
      loadingAnnouncement,
    } = this.props.loadings;
    if (loadingFriends && loadingGames && (loadingAnnouncements || loadingAnnouncement)) {
      return (
        <div id="announcement">
          <Sidebar />
          <Navbar />
          <Main />
        </div>
      );
    }
    return <Loading />;
  }
}
Announcements.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};
/**
 * Export
 */
export default Announcements;

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
import Main from 'frontend/src/containers/Announce/Main';

/**
 * Code
 */
class Announce extends React.Component {
  componentDidMount() {
    this.props.actions.changeLoadingProfileAnnounce();
    this.props.actions.getAllFriends();
    this.props.actions.getProfileAnnounce();
    this.props.actions.getAllGames();
  }

  render() {
    const {
      loadingFriends,
      loadingGames,
      loadingProfileAnnounce,
    } = this.props.loadings;
    if (!loadingFriends || !loadingGames || !loadingProfileAnnounce) {
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
Announce.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};
/**
 * Export
 */
export default Announce;

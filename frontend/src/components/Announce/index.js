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
import Footer from 'frontend/src/containers/Footer';
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
        <div className="right-side">
          <Navbar />
          <Main />
          <Footer />
        </div>
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

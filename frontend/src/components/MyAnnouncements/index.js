/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Main from 'frontend/src/containers/MyAnnouncements/Main';
import Loading from 'frontend/src/components/Loading';

/**
 * Code
 */

class MyAnnouncements extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  /*
   * Lifecycle
   */
  componentDidMount() {
    // this.props.actions.getAllMyAnnouncements();
    this.props.actions.getAllFriends();
    this.props.actions.getAllGames();
    this.props.actions.getAllMyAnnouncements();
  }

  /*
   * Rendu
   */
  render() {
    const {
      loadingGames,
      loadingFriends,
      loadingMyAnnouncements,
    } = this.props.loadings;
    if (!loadingFriends || !loadingGames || !loadingMyAnnouncements) {
      return <Loading />;
    }
    return (
      <div className="Sidebar">
        <Sidebar />
        <div className="right-side">
          <Navbar />
          <Main />
        </div>
      </div>
    );
  }
}

MyAnnouncements.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

/**
 * Export
 */
export default MyAnnouncements;

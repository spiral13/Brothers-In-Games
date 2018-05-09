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
import Loading from 'frontend/src/components/Loading';

/**
 * Code
 */

class ShowAccount extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  /*
   * Lifecycle
   */
  componentDidMount() {
    // this.props.actions.getAllMyAnnouncements();
    this.props.actions.getAllFriends();
    this.props.actions.getAllGames();
  }

  /*
   * Rendu
   */
  render() {
    const {
      loadingGames,
      loadingFriends,
    } = this.props.loadings;
    if (!loadingFriends || !loadingGames) {
      return <Loading />;
    }
    return (
      <div className="MyGamesList">
        <Sidebar />
        <div className="right-side">
          <Navbar />
        </div>
      </div>
    );
  }
}

ShowAccount.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

/**
 * Export
 */
export default ShowAccount;

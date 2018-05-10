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
import OneMessage from 'frontend/src/containers/Messages/OneMessage';
import Loading from 'frontend/src/components/Loading';
/**
 * Code
 */

class ShowMessage extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  /*
   * Lifecycle
   */
  componentDidMount() {
    this.props.actions.changeOneMessageToFalse();
    this.props.actions.getAllFriends();
    // Faire une requête pour récupérer le profil de l'annonce
    this.props.actions.getOneMessage();
    this.props.actions.getAllGames();
  }

  /*
   * Rendu
   */
  render() {
    const {
      loadingFriends,
      loadingGames,
      loadingOneMessage,
    } = this.props.loadings;
    if (!loadingFriends || !loadingGames || !loadingOneMessage) {
      return <Loading />;
    }
    return (
      <div className="ShowOneMessage">
        <Sidebar />
        <div className="right-side">
          <Navbar />
          <OneMessage />
        </div>
      </div>
    );
  }
}

ShowMessage.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};
/**
 * Export
 */
export default ShowMessage;

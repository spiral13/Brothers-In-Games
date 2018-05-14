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
import Main from 'frontend/src/containers/GameList/Main';
import Loading from 'frontend/src/components/Loading';
import Footer from 'frontend/src/containers/Footer';

/**
 * Code
 */

class GameList extends React.Component {
  /*
   * Lifecycle
   */
  componentDidMount() {
    this.props.actions.getAllGames();
    this.props.actions.getAllFriends();
  }

  /*
   * Rendu
   */
  render() {
    const {
      loadingFriends,
      loadingGames,
    } = this.props.loadings;
    if (!loadingFriends || !loadingGames) {
      return <Loading />;
    }
    return (
      <div className="gameList">
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
GameList.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

/**
 * Export
 */
export default GameList;

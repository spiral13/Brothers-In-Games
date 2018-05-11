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
import Main from 'frontend/src/containers/MyGames/Main';
import Loading from 'frontend/src/components/Loading';

/**
 * Code
 */

class MyGames extends React.Component {
  /*
   * Lifecycle
   */
  componentDidMount() {
    this.props.actions.getAllMyGames();
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
      loadingMyGames,
    } = this.props.loadings;
    if (!loadingFriends || !loadingGames || !loadingMyGames) {
      return <Loading />;
    }
    return (
      <div className="MyGamesList">
        <Sidebar />
        <div className="right-side">
          <Navbar />
          <Main />
        </div>
      </div>
    );
  }
}

MyGames.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

/**
 * Export
 */
export default MyGames;

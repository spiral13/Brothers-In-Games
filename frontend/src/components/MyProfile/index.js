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
import Main from 'frontend/src/containers/MyProfile/Main';
import Loading from 'frontend/src/components/Loading';

/**
 * Code
 */

class Myprofile extends React.Component {
  /*
   * Lifecycle
   */
  componentDidMount() {
    this.props.actions.getAllFriends();
    this.props.actions.getAllGames();
  }

  /*
   * Rendu
   */
  render() {
    const { loadingFriends, loadingGames } = this.props.loadings;
    if (!loadingFriends || !loadingGames) {
      return <Loading />;
    }
    return (
      <div id="MyprofilePage">
        <Sidebar />
        <div className="right-side">
          <Navbar />
          <Main />
        </div>
      </div>
    );
  }
}

Myprofile.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

/**
 * Export
 */
export default Myprofile;

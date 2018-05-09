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
import Main from 'frontend/src/components/MyProfile/Main';
import Loading from 'frontend/src/components/Loading';

/**
 * Code
 */

class Myprofile extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  state = {
    loading: true,
  }

  /*
   * Lifecycle
   */
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
    this.props.actions.getAllMyGames();
    this.props.actions.getAllFriends();
    this.props.actions.getAllGames();
  }

  /*
   * Rendu
   */
  render() {
    if (this.state.loading) {
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
};

/**
 * Export
 */
export default Myprofile;

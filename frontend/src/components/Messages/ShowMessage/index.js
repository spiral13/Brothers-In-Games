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

class ShowMessage extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  state = {
    loading: true,
  }

  /*
   * Lifecycle
   */
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    this.props.actions.getAllFriends();
  }

  /*
   * Rendu
   */
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="ShowOneMessage">
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

ShowMessage.propTypes = {
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default ShowMessage;

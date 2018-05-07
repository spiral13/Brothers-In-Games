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
import Main from 'frontend/src/containers/Messages/Main';
/**
 * Code
 */

class ReceiveMessages extends React.Component {
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
    this.props.actions.receivedMessages();
    this.props.actions.sendedMessages();
  }

  /*
   * Rendu
   */
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="ReceiveMessagesList">
        <Navbar />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

ReceiveMessages.propTypes = {
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default ReceiveMessages;
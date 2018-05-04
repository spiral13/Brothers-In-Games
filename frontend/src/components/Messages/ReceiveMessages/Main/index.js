/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Message from 'frontend/src/containers/Messages/Message';
/**
 * Code
 */

class Main extends React.Component {
  state = {
    test: '',
  }
  /*
   * Lifecycle
   */

  /*
   * Rendu
   */
  render() {
    return (
      <div className="MainMessages">
        {/* Mapper tout les messages */}
        {console.log(this.props.messages)}
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}
Main.propTypes = {
  messages: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Main;

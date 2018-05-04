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
        {this.props.messages.map(message => <Message key={message.id} content={message.content} {...message} />)}
      </div>
    );
  }
}
Main.propTypes = {
  messages: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Main;

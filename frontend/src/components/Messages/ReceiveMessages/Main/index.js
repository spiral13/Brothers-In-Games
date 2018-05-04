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
        {this.props.messages.map(message => <Message key={message.id} content={message.content} />)}
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

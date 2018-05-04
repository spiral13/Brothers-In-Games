/*
 * Npm import
 */
import React from 'react';
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
/**
 * Export
 */
export default Main;

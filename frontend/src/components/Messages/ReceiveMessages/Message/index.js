/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/

/**
 * Code
 */
class Message extends React.Component {
  state = {
    test: '',
  }
  /*
   * Lifecycle
   */
   redirection = (value) => {
     this.props.actions.redirect(value);
   }
  /*
   * Rendu
   */
   render() {
     return (
       <div className="ReceivedMessage">
         <a href="#" onClick={() => this.redirection(`/app_dev.php/message/show/10`)}>
           <h2>Nom du joueur</h2>
           <p>Preview</p>
         </a>
       </div>
     );
   }
}
Message.propTypes = {
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Message;

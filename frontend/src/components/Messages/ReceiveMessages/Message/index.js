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
         <a href="#" onClick={() => this.redirection(`/app_dev.php/message/show/${this.props.id}`)}>
           <h2>{this.props.author.username}</h2>
           <p>{this.props.content}</p>
         </a>
       </div>
     );
   }
}
Message.propTypes = {
  actions: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
/**
 * Export
 */
export default Message;

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
         {/* Ici, récupérer l'id de l'utilisateur */}
         <a href="#" onClick={() => this.redirection(`/app_dev.php/message/show/10`)}>
            {/* this.props.user...username */}
           <h2>Nom du joueur</h2>
           <p>{this.props.content}</p>
         </a>
       </div>
     );
   }
}
Message.propTypes = {
  actions: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Message;

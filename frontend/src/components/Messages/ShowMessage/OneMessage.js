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

class OneMessage extends React.Component {
  /*
   * Lifecycle
   */
   changebar = () => {

   }
  /*
   * Rendu
   */
   render() {
     const { author, content } = this.props.selectedMail.message[0];
     return (
       <div className="OneMessage">
         <div className="currentMessage">
           <img src={author.profile.image} alt="Image de profil" />
           <div className="userMessageProfile">
             <h1>{author.username}</h1>
             <p>{content}</p>
           </div>
         </div>
       </div>
     );
   }
}
OneMessage.propTypes = {
  selectedMail: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default OneMessage;

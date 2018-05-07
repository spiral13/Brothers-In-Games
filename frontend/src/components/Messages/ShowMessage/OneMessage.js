/*
 * Npm import
 */
import React from 'react';
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
     return (
       <div className="OneMessage">
         {console.log(this.props)}
         <img src="" alt="Image de profil" />
         <div className="userMessageProfile">
           <h1>User</h1>
           <p>Content Message</p>
         </div>
       </div>
     );
   }
}

/**
 * Export
 */
export default OneMessage;

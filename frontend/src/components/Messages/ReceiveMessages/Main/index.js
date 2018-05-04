/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
/**
* Local import
*/
import Message from 'frontend/src/containers/Messages/Message';
/**
 * Code
 */

class Main extends React.Component {
  state = {
    message: 'receivedMessages',
  }
  /*
   * Lifecycle
   */
   changebar = (message) => {
     this.setState({ message });
   }
  /*
   * Rendu
   */
   render() {
     return (
       <div className="MainMessages">
         <div className="bannerMailing">
           <ul className="navmails">
             <li><a href="#" className={ClassNames({ selectedMessage: this.state.message === 'receivedMessages' })} onClick={() => this.changebar('receivedMessages')}>Messages reçus</a></li>
             <li><a href="#" className={ClassNames({ selectedMessage: this.state.message === 'sendedMessages' })} onClick={() => this.changebar('sendedMessages')}>Messages envoyés</a></li>
           </ul>
         </div>
         {this.state.message === 'receivedMessages' ? this.props.receivedMails.map(message => <Message key={message.id} content={message.content} {...message} />)
         :
         this.props.sendMails.map(message => <Message key={message.id} content={message.content} {...message} />)}
       </div>
     );
   }
}
Main.propTypes = {
  receivedMails: PropTypes.array.isRequired,
  sendMails: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Main;

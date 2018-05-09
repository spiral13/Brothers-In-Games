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
     let content = '';
     this.props.content.split('').forEach((letter, index) => {
       if (index <= 70) content += letter;
     });
     return (
      <tbody>
        <tr>
          <td><a onClick={() => this.redirection(`/app_dev.php/message/show/${this.props.id}`)}>{this.props.author !== undefined ? this.props.author.username : this.props.receiver.username }</a></td>
          <td><a onClick={() => this.redirection(`/app_dev.php/message/show/${this.props.id}`)}>{content} ...</a></td>
        </tr>
      </tbody>
     );
   }
}
Message.propTypes = {
  id: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.objectOf(PropTypes.string.isRequired),
  receiver: PropTypes.objectOf(PropTypes.string.isRequired),
};
/**
 * Export
 */
export default Message;

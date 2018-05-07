/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import ResponseComponent from 'frontend/src/containers/Announce/ResponseComponent';
/**
 * Code
 */

class OneMessage extends React.Component {
  /*
   * Lifecycle
   */
  componentDidMount() {
    const newAuthor = [{ user: { id: 0 } }];
    newAuthor[0].user.id = this.props.selectedMail.message[0].author.id;
    this.props.actions.changeProfileAnnounce(newAuthor);
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
        <ResponseComponent />
      </div>
    );
  }
}
OneMessage.propTypes = {
  selectedMail: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default OneMessage;

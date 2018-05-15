/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Close from 'react-icons/lib/fa/close';
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
  }

  onChange = () => {
    this.props.actions.hideResponse();
  }
  /*
   * Rendu
   */
  render() {
    const { author, content } = this.props.selectedMail.message[0];
    return (
      <div className="OneMessage">
        <div className="currentMessage">
          <div className="userMessageProfile">
            <img src={author.profile.image} alt="" />
            <h1>{author.username}</h1>
          </div>
          <p>{content}</p>
        </div>
        <div className="OneMessage-response">
          <div className="title-response">Repondre</div>
          <ResponseComponent id={this.props.selectedMail.message[0].author.id} />
        </div>
        {this.props.popup ?
          <div className="showResponse">
            <div className="showResponse-wrap">
              <button className="closePopup" onClick={this.onChange}>
                <Close />
              </button>
              <h2>
                {this.props.response.status ? 'Votre message à bien été envoyé:' : 'Erreur lors de l\'envoi du message:'}
              </h2>
              <p className="messageSend">
                {this.props.response.content}
              </p>
              <button className="okButton" onClick={this.onChange}>Ok</button>
            </div>
          </div>
          : true}
      </div>
    );
  }
}
OneMessage.propTypes = {
  selectedMail: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  popup: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default OneMessage;

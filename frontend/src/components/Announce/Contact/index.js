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
class Contact extends React.Component {
  state = {
    contact: false,
  }

  onResponseClick = () => {
    this.setState({ contact: !this.state.contact });
  }

  onChange = () => {
    this.props.actions.hideResponse();
  }

  render() {
    return (
      <div id="contactPlayer">
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
        <div id="announce-contact">
          <div id="announce-contact-show">
            <img className="playerPicture" src={this.props.datas.user.profile.image} alt="" />
            <p>{this.props.datas.content}</p>
          </div>
          {this.state.contact ? <ResponseComponent /> : true}
          {/* eslint-disable-next-line */}
          <a href="#" onClick={this.onResponseClick}>{this.state.contact ? 'Réduire' : 'Répondre à son offre'}</a>
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  popup: PropTypes.bool.isRequired,
  datas: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Contact;

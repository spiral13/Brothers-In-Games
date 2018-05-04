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
        {this.props.popup ? <div className="showResponse"><a href="#" className="closePopup" onClick={this.onChange}>X</a><h2>{this.props.response.status ? 'Votre message à bien été envoyé:' : 'Errer lors de l\'envoi du message:'}</h2><p className="messageSend">{this.props.response.content}</p></div> : true}
        <div id="announce-contact">
          <div id="announce-contact-show">
            <img className="playerPicture" src={this.props.datas.user.profile.image} alt="Photo de profil" />
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

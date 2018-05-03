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

  render() {
    return (
      <div id="contactPlayer">
        <div id="announce-contact">
          <div id="announce-contact-show">
            <img className="playerPicture" src={this.props.datas.user.profile.image} alt="Photo de profil" />
            <h2 className="searchGame">{this.props.datas.game.title}</h2>
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
  datas: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Contact;

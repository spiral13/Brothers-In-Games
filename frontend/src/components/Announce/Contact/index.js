/*
 * Npm import
 */
import React from 'react';
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
            <image src="#" alt="Photo de profil" />
            <p>Lorem ipsum ...</p>
          </div>
          {this.state.contact ? <ResponseComponent /> : true}
          {/* eslint-disable-next-line */}
          <a href="#" onClick={this.onResponseClick}>{this.state.contact ? 'Réduire' : 'Répondre à son offre'}</a>
        </div>
      </div>
    );
  }
}
/**
 * Export
 */
export default Contact;

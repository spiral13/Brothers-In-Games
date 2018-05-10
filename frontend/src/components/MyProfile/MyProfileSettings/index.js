/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import FaToggleOff from 'react-icons/lib/fa/toggle-off';
import FaToggleOn from 'react-icons/lib/fa/toggle-on';
// import ImageUploader from 'react-image-upload';


/**
* Local import
*/

/**
 * Code
 */
class MyProfileSettings extends React.Component {
  state = {
    firstNameIsPublic: false,
    familyNameIsPublic: false,
    nickNameIsPublic: false,
  }
  render() {
    return (
      <section id="settingsForMyProfile">
        {/* <div >  x Téléchargez votre photo de profil </div> */}

        <section id="settingsInputs">
          {/* <ImageUploader
            buttonText="Choose images"
            onChange={this.onDrop}
            id="photoUploader"
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          /> */}
          <input
            id="inputFirstName"
            placeholder="Prénom"
          />
          {this.state.firstNameIsPublic &&
            <FaToggleOn
              className="publicToggle-on"
              onClick={() =>
                this.setState({ firstNameIsPublic: !this.state.firstNameIsPublic })}
            />
          }
          {!this.state.firstNameIsPublic &&
          <FaToggleOff
            className="publicToggle-off"
            onClick={() =>
              this.setState({ firstNameIsPublic: !this.state.firstNameIsPublic })}
          />
          }
          <input
            id="inputFamilyName"
            placeholder="Nom"
          />
          {this.state.familyNameIsPublic &&
            <FaToggleOn
              className="publicToggle-on"
              onClick={() =>
                this.setState({ familyNameIsPublic: !this.state.familyNameIsPublic })}
            />
          }
          {!this.state.familyNameIsPublic &&
          <FaToggleOff
            className="publicToggle-off"
            onClick={() =>
              this.setState({ familyNameIsPublic: !this.state.familyNameIsPublic })}
          />
          }

          <input
            id="inputNickName"
            placeholder="Surnom de ton avatar"
          />
          {this.state.nickNameIsPublic &&
            <FaToggleOn
              className="publicToggle-on"
              onClick={() =>
                this.setState({ nickNameIsPublic: !this.state.nickNameIsPublic })}
            />
          }
          {!this.state.nickNameIsPublic &&
          <FaToggleOff
            className="publicToggle-off"
            onClick={() =>
              this.setState({ nickNameIsPublic: !this.state.nickNameIsPublic })}
          />
          }

          <button id="confirmInformationButton">Validez vos informations</button>

        </section>
        <span id="settingsHelp"> *Rendre visibles ou non vos informations auprès de vos amis avec <FaToggleOn /> </span>
      </section>
    );
  }
}

// Game.propTypes = {
//   game: PropTypes.object.isRequired,
// };


/**
 * Export
 */
export default MyProfileSettings;

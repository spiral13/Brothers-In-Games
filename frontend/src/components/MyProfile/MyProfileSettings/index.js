/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
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
    nickNameIsPublic: false,
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.submitChange();
  }

  handleChangeInput = ({ target }) => {
    this.props.actions.changeName(target.name, target.value);
  }

  render() {
    return (
      <section id="settingsForMyProfile">
        {/* <div >  x Téléchargez votre photo de profil </div> */}
        <form className="settingsInputs" onSubmit={this.onSubmit}>
          {/* <ImageUploader
            buttonText="Choose images"
            onChange={this.onDrop}
            id="photoUploader"
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          /> */}
          <label htmlFor="inputFirstName" className="label">Prénom: </label>
          {console.log(this.props.profileInformation)}
          <input
            id="inputFirstName"
            name="firstname"
            placeholder="Prénom"
            onChange={this.handleChangeInput}
            value={this.props.profileInformation[0][0].firstname}
          />
          {this.state.firstNameIsPublic &&
            <FaToggleOn
              className="publicToggle-on"
              onClick={() => this.setState({ firstNameIsPublic: !this.state.firstNameIsPublic })}
            />
          }
          {!this.state.firstNameIsPublic &&
          <FaToggleOff
            className="publicToggle-off"
            onClick={() => this.setState({ firstNameIsPublic: !this.state.firstNameIsPublic })}
          />
          }

          <label htmlFor="inputNickName" className="label" >Pseudonyme: </label>
          <input
            id="inputNickName"
            name="username"
            placeholder="Surnom"
            onChange={this.handleChangeInput}
            value={this.props.profileInformation[0].username}
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
        </form>
        <span id="settingsHelp"> *Rendre visibles ou non vos informations auprès de vos amis avec <FaToggleOn /> </span>
      </section>
    );
  }
}

MyProfileSettings.propTypes = {
  actions: PropTypes.object.isRequired,
  profileInformation: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default MyProfileSettings;

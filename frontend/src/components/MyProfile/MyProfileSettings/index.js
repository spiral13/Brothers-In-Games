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
          <input
            id="inputFirstName"
            name="firstname"
            placeholder={this.props.profileInformation[0][0].firstname}
            onChange={this.handleChangeInput}
            value={this.props.profileInformationChange.firstname}
          />

          <label htmlFor="inputFirstName" className="label">Description: </label>
          <input
            id="inputFirstName"
            name="description"
            placeholder={this.props.profileInformation[0][0].description}
            onChange={this.handleChangeInput}
            value={this.props.profileInformationChange.description}
          />

          <label htmlFor="inputFirstName" className="label">gender: </label>
          <input
            id="inputFirstName"
            name="gender"
            placeholder={this.props.profileInformation[0][0].gender}
            onChange={this.handleChangeInput}
            value={this.props.profileInformationChange.gender}
          />

          <label htmlFor="inputFirstName" className="label">birthday: </label>
          <input
            id="inputFirstName"
            name="birthday"
            placeholder={this.props.profileInformation[0][0].birthday}
            onChange={this.handleChangeInput}
            value={this.props.profileInformationChange.birthday}
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
  profileInformationChange: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default MyProfileSettings;

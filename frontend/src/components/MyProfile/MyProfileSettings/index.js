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
    username: '',

    // pictures: [],
  }

  // onDrop= (picture) => {
  //   this.setState({
  //     pictures: this.state.pictures.concat(picture),
  //   });
  // }

  handleChangeInput = ({ target }) => {
    if (target.value === '') {
      this.setState({
        [target.name]: {
          ...this.state[target.name],
        },
      });
    }
    else {
      this.setState({
        [target.name]: {
          ...this.state[target.name],
        },
      });
    }
    this.props.actions.changeInputSettings(target.name, target.value);
  }

  render() {
    const { user } = this.props;
    return (
      <section id="settingsForMyProfile">
        {/* <div >  x Téléchargez votre photo de profil </div> */}

        <form id="settingsInputs" method="post" onSubmit={this.handleSubmit}>
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
            placeholder={user.username}
            onChange={this.handleChangeInput}
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

          <label htmlFor="inputNickName" className="label" >Pseudonyme: </label>
          <input
            id="inputNickName"
            placeholder="Surnom de ton avatar"
            onChange={this.changeInput}
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
  user: PropTypes.array.isRequired,
};


/**
 * Export
 */
export default MyProfileSettings;

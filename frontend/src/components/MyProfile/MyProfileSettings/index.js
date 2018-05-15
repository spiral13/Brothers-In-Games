/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
/**
 * Code
 */
class MyProfileSettings extends React.Component {
  // state = {
  //   firstNameIsPublic: false,
  //   nickNameIsPublic: false,
  // }

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

        <form className="settingsInputs" onSubmit={this.onSubmit}>
          <div className="settingsInputs-wrap">
            <label htmlFor="inputFirstName" className="label">Prénom: </label>
            <input
              id="inputFirstName"
              name="firstname"
              placeholder={this.props.profileInformationChange.firstname}
              onChange={this.handleChangeInput}
              value={this.props.profileInformationChange.firstname}
            />
          </div>

          <div className="settingsInputs-wrap">
            <label htmlFor="inputFirstName" className="label">Image: </label>
            <input
              id="inputFirstName"
              name="image"
              placeholder={this.props.profileInformationChange.image}
              onChange={this.handleChangeInput}
              value={this.props.profileInformationChange.image}
            />
          </div>

          <div className="settingsInputs-wrap">
            <label htmlFor="inputFirstName" className="label">Description: </label>
            <input
              id="inputFirstName"
              name="description"
              placeholder={this.props.profileInformationChange.description}
              onChange={this.handleChangeInput}
              value={this.props.profileInformationChange.description}
            />
          </div>

          <div className="settingsInputs-wrap">
            <label htmlFor="inputFirstName" className="label">gender: </label>
            <input
              id="inputFirstName"
              name="gender"
              placeholder={this.props.profileInformationChange.gender}
              onChange={this.handleChangeInput}
              value={this.props.profileInformationChange.gender}
            />
          </div>

          <div className="settingsInputs-wrap">
            <label htmlFor="inputFirstName" className="label">birthday: </label>
            <input
              id="inputFirstName"
              name="birthday"
              placeholder={this.props.profileInformationChange.birthday}
              onChange={this.handleChangeInput}
              value={this.props.profileInformationChange.birthday}
            />
          </div>
          {/* {this.state.firstNameIsPublic &&
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
          } */}
          {/* {this.state.nickNameIsPublic &&
            <FaToggleOn
              className="publicToggle-on"
              onClick={() =>
                this.setState({ nickNameIsPublic: !this.state.nickNameIsPublic })}
            />
          } */}
          {/* {!this.state.nickNameIsPublic &&
          <FaToggleOff
            className="publicToggle-off"
            onClick={() =>
              this.setState({ nickNameIsPublic: !this.state.nickNameIsPublic })}
          />
          } */}
          <button id="confirmInformationButton">Validez vos informations</button>
        </form>
        {/* <span id="settingsHelp"> *Rendre visibles ou non vos informations auprès de vos amis avec <FaToggleOn /> </span> */}
      </section>
    );
  }
}

MyProfileSettings.propTypes = {
  actions: PropTypes.object.isRequired,
  profileInformationChange: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default MyProfileSettings;

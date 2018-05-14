/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaToggleOff from 'react-icons/lib/fa/toggle-off';
import FaToggleOn from 'react-icons/lib/fa/toggle-on';
/**
* Local import
*/

/**
 * Code
 */
class MyAccountSettings extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.submitChangePrivateInformation();
  }

  handleChangeInput = ({ target }) => {
    this.props.actions.changeName(target.name, target.value);
  }

  render() {
    const { user } = this.props;
    return (
      <section id="MyAccount">
        <form className="settingsInputs" onSubmit={this.onSubmit}>
          <label htmlFor="inputPassword" className="label">Surnom: </label>
          <input
            id="inputPassword"
            className="inputSettings"
            name="username"
            placeholder={user.username}
            onChange={this.handleChangeInput}
            value={this.props.profileInformationChange.username}
          />

          <label htmlFor="inputPassword" className="label">Mot de passe: </label>
          <input
            id="inputPassword"
            className="inputSettings"
            name="password"
            placeholder="Nouveau mot de passe"
            onChange={this.handleChangeInput}
            value={this.props.profileInformationChange.password}
          />
          <label htmlFor="inputEmail" className="label" >E-mail: </label>
          <input
            id="inputEmail"
            className="inputSettings"
            name="mail"
            placeholder="E-mail"
            onChange={this.handleChangeInput}
            value={this.props.profileInformationChange.mail}
          />
          <button id="confirmInformationButton">Validez vos informations</button>
        </form>
      </section>
    );
  }
}

MyAccountSettings.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  profileInformationChange: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default MyAccountSettings;

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
class SignupForm extends React.Component {

  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    username: PropTypes.string.isRequired,
    newpassword: PropTypes.string.isRequired,
    confirmpassword: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };

  userNameHandleChange = (evt) => {
    // Je recup la value depuis la cible de l'event
    const { value } = evt.target;
    // j'exécute la fonction fournie en passant la value
    this.props.actions.changeSignUpUserName(value);
  }

  newPasswordHandleChange = (evt) => {
    // Je recup la value depuis la cible de l'event
    const { value } = evt.target;
    // j'exécute la fonction fournie en passant la value
    this.props.actions.changeSignUpNewPassword(value);
  }

  confirmPasswordHandleChange = (evt) => {
    // Je recup la value depuis la cible de l'event
    const { value } = evt.target;
    // j'exécute la fonction fournie en passant la value
    this.props.actions.changeSignUpConfirmPassword(value);
  }

  emailHandleChange = (evt) => {
    // Je recup la value depuis la cible de l'event
    const { value } = evt.target;
    // j'exécute la fonction fournie en passant la value
    this.props.actions.changeSignUpEmail(value);
  }

  handleSubmit = (evt) => {
    // J'empeche le comportement par défaut
    evt.preventDefault();
    console.log(this.props);
    // J'exécute la fonction fournie par les props
    this.props.actions.signUpSubmit();
  }

  render() {
    const { username, newpassword, confirmpassword, email } = this.props;
    return (
      <form className="signupForm" method="post" onSubmit={this.handleSubmit}>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.userNameHandleChange}
          />
        <label for="newPassword">Password</label>
        <input
          id="newPassword"
          type="password"
          name="newPassword"
          value={newpassword}
          onChange={this.newPasswordHandleChange}
        />
        <label for="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={confirmpassword}
          onChange={this.confirmPasswordHandleChange}
        />
        <label for="email">Email</label>
        <input
          className="email"
          type="text"
          name="email"
          value={email}
          onChange={this.emailHandleChange}
        />
        <label for="email">Confirm Email</label>
        <input className="email" type="text" name="confirmEmail" />
        <button>Envoyer</button>
        {/* <button id="buttonSubmit">Envoyer</button> */}
      </form>
    );
  }
}
 /**
 * Export
 */
export default SignupForm;

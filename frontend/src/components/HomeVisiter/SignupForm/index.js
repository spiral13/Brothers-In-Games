/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
    newPassword: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    confirmEmail: PropTypes.string.isRequired,
    changeToggle: PropTypes.func.isRequired,
  };

  state = {
    username: {
      agreed: false,
      error: false,
    },
    newPassword: {
      agreed: false,
      error: false,
    },
    confirmPassword: {
      agreed: false,
      error: false,
    },
    email: {
      agreed: false,
      error: false,
    },
    confirmEmail: {
      agreed: false,
      error: false,
    },
  }

  handleSubmit = (evt) => {
    // J'empeche le comportement par défaut
    evt.preventDefault();
    this.props.changeToggle();
    // J'exécute la fonction fournie par les props
    if (this.props.username !== '' && this.props.newPassword !== '' && this.props.confirmPassword !== '' && this.props.email !== '' && this.props.confirmEmail !== '') {
      if (this.props.email.search('@') <= 0 ||
      this.props.confirmEmail.search('@') <= 0 ||
      this.props.email.search('@') !== this.props.confirmEmail.search('@') ||
      this.props.email !== this.props.confirmEmail
      ) {
        return alert('Erreur lors de la saisie du mail');
      }
      else if (this.props.newPassword !== this.props.confirmPassword || this.props.newPassword.length < 7)
        return alert('Erreur lors de la saisie du mot de passe, vérifiez bien que votre mot de passe fait au moins 7 lettres ou vérifiez si votre confirmation de mot de passe est bien identique');
      this.props.actions.signUpSubmit();
      alert(`Un email de confirmation d'inscription vous a bien été envoyé à l'adresse suivante: ${this.props.email}`);
    }
  }

  changeInput = ({ target }) => {
    if (target.value === '') {
      this.setState({
        [target.name]: {
          ...this.state[target.name],
          error: true,
          agreed: false,
        },
      });
    }
    else {
      this.setState({
        [target.name]: {
          ...this.state[target.name],
          agreed: true,
          error: false,
        },
      });
    }
    this.props.actions.changeFormSignup(target.name, target.value);
  }

  render() {
    const {
      username,
      newPassword,
      confirmPassword,
      email,
      confirmEmail,
      changeToggle,
    } = this.props;
    return (
      <form
        className="signupForm"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <legend>Inscription</legend>
          <div className="wrap">
            <label htmlFor="username">Username</label>
            <input
              className={classNames({ error: this.state.username.error, agreed: this.state.username.agreed })}
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.changeInput}
            />
          </div>
          <div className="wrap">
            <label htmlFor="newPassword">Password</label>
            <input
              className={classNames({ error: this.state.newPassword.error, agreed: this.state.newPassword.agreed })}
              id="newPassword"
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={this.changeInput}
            />
          </div>
          <div className="wrap">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={classNames({ error: this.state.confirmPassword.error, agreed: this.state.confirmPassword.agreed })}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.changeInput}
            />
          </div>
          <div className="wrap">
            <label htmlFor="email">Email</label>
            <input
              className={classNames('email', { error: this.state.email.error, agreed: this.state.email.agreed })}
              type="text"
              name="email"
              value={email}
              onChange={this.changeInput}
            />
          </div>
          <div className="wrap">
            <label htmlFor="email">Confirm Email</label>
            <input
              className={classNames('email', { error: this.state.confirmEmail.error, agreed: this.state.confirmEmail.agreed })}
              type="text"
              name="confirmEmail"
              value={confirmEmail}
              onChange={this.changeInput}
            />
          </div>
          <div className="wrap">
            <button onClick={() => changeToggle()}>Annuler</button>
            <button>Envoyer</button>
          </div>
        </fieldset>
        {/* <button id="buttonSubmit">Envoyer</button> */}
      </form>
    );
  }
}
/**
* Export
*/
export default SignupForm;

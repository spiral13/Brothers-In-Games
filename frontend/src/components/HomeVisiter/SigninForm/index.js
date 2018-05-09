/**
 * Npm import
 */
import React from 'react';
import ArrowRight from 'react-icons/lib/fa/arrow-right';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
* Local import
*/

/**
 * Code
 */
class SigninForm extends React.Component {
  state = {
    _username: {
      agreed: false,
      error: false,
    },
    _password: {
      agreed: false,
      error: false,
    },
  }

  submitForm = (evt) => {
    evt.preventDefault();
    if (this.props.username !== '' && this.props.password !== '') {
      this.props.actions.submitConnect();
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
    this.props.actions.changeForm(target.name, target.value);
  }

  render() {
    const { username, password } = this.props;
    return (
      <form
        method="post"
        onSubmit={this.submitForm}
      >
        {/* Login username */}
        <label htmlFor="username">Login</label>
        <input
          className={classNames({ error: this.state._username.error, agreed: this.state._username.agreed })}
          id="username"
          placeholder="Login"
          type="text"
          name="_username"
          onChange={this.changeInput}
          value={username}
        />
        {/* Login Mot de passe */}
        <label htmlFor="password">Mot de passe</label>
        <input
          className={classNames({ error: this.state._password.error, agreed: this.state._password.agreed })}
          id="password"
          placeholder="Password"
          type="password"
          name="_password"
          onChange={this.changeInput}
          value={password}
        />
        <a href="#" id="forgotPassword">Mot de passe perdu?</a>
        <button id="buttonSubmit">Se connecter <ArrowRight /></button>
      </form>
    );
  }
}

SigninForm.propTypes = {
  actions: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default SigninForm;

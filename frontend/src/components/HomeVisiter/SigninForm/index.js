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
    // else if (this.props.username !== '' && this.props.password === '') {
    //
    // }
  }

  changeInput = ({ target }) => {
    if (target.value === '') {
      this.setState({
        [target.name]: {
          ...this.state[target.name],
          agreed: true,
          error: true,
        },
      });
    }
    // else {
    //   this.setState({ [target.name]: 'agreed' });
    // }
    this.props.actions.changeForm(target.name, target.value);
  }

  render() {
    const { username, password } = this.props;
    return (
      <form
        method="post"
        onSubmit={this.submitForm}
      >
        <label htmlFor="username">Login</label>
        <input
          className={classNames({ error: this.state._username.error })}
          id="username"
          type="text"
          name="_username"
          onChange={this.changeInput}
          value={username}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          className={classNames({ error: this.state._password.error })}
          id="password"
          type="password"
          name="_password"
          onChange={this.changeInput}
          value={password}
        />
        <a href="#" id="forgotPassword">Mot de passe perdu?</a>
        <button id="buttonSubmit"><ArrowRight /></button>
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

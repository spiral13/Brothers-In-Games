/**
 * Npm import
 */
import React from 'react';
import ArrowRight from 'react-icons/lib/fa/arrow-right';
import PropTypes from 'prop-types';
/**
* Local import
*/

/**
 * Code
 */
class SigninForm extends React.Component {
  submitForm = (evt) => {
    evt.preventDefault();
    this.props.actions.submitConnect();
  }

  render() {
    const { username, password, actions } = this.props;
    return (
      <form
        method="post"
        onSubmit={this.submitForm}
      >
        <label htmlFor="username">Login</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={({ target }) => actions.changeLoginForm(target.value)}
          value={username}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={({ target }) => actions.changePasswordForm(target.value)}
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

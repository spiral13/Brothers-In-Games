/**
 * Npm import
 */
import React from 'react';
import ArrowRight from 'react-icons/lib/fa/arrow-right';
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
    const { login, password, actions } = this.props;
    return (
      <form
        method="post"
        onSubmit={this.submitForm}
      >
        <label for="login">Login</label>
        <input
          id="login"
          type="text"
          name="login"
          onChange={({ target }) => actions.changeLoginForm(target.value)}
          value={login}
        />
        <label for="password">Mot de passe</label>
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
/**
 * Export
 */
export default SigninForm;

/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/
import SigninForm from 'frontend/src/containers/HomeVisiter/Signin';
import SignupForm from 'frontend/src/containers/HomeVisiter/Signup';
/**
 * Code
 */
class Header extends React.Component {
  state = {
    isClicked: false,
  }

  changeState = () => {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <header>
        {this.state.isClicked &&
        <div>
          <SignupForm func={this.changeState} />
        </div>}
        <div id="angle">
          <div id="leftSide">
            <h1>
              Brothers
              <br />
              <span><i>in</i>Games</span>
            </h1>
            <p className="login_signin">Se connecter</p>
            <SigninForm />
            {/* eslint-disable-next-line */}
            <button
              className="signup"
              onClick={() => this.setState({ isClicked: !this.state.isClicked })}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </header>
    );
  }
}
/**
 * Export
 */
export default Header;

/**
 * Npm import
 */
import React from 'react';
import Popup from 'react-popup';
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
    isClicked: false
  }

  render() {
    return (<header>
      <div id="leftSide">
        <h1>
          Brothers
          <br/>
          <span>inGames</span>
        </h1>
        <p className="login_signin">Se connecter</p>
        <SigninForm/>
        <a href="#" onClick={() => {
            this.setState({
              isClicked: !this.state.isClicked
            });
          }} className="login_signin ajust">
          S'inscrire
        </a>
        {this.state.isClicked &&
        <div>
          <SignupForm />
        </div>}
      </div>

      <div id="tom_clancy"></div>
      <div className="underplace">
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </header>);
  }
}
/**
 * Export
 */
export default Header;

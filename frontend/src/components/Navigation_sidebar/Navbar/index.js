/**
 * Npm import
 */
import React from 'react';
import Gamepad from 'react-icons/lib/fa/gamepad';
import User from 'react-icons/lib/fa/user';
import Server from 'react-icons/lib/fa/server';
import Signout from 'react-icons/lib/fa/sign-out';
import Paper from 'react-icons/lib/fa/newspaper-o';
import PropTypes from 'prop-types';
/**
* Local import
*/

/**
 * Code
 */
class Navbar extends React.Component {
  state = {
    showPlayerInformations: false,
  }

  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  showInformations = () => {
    this.setState({ showPlayerInformations: !this.state.showPlayerInformations });
  }

  render() {
    return (
      <div id="navbar">
        <div className="titles">
          {/* eslint-disable-next-line */}
          <a href="#" onClick={() => this.redirection("/app_dev.php/games")}>Les jeux</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={() => this.redirection("/app_dev.php/announcements")}>Les annonces</a>
        </div>
        <nav id="nav-rubrique">
          <ul>
            <li>
              <Paper className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/message/receive")}>Mes messages</a>
            </li>
            <li>
              <Paper className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/home")}>Mes annonces</a>
            </li>
            <li>
              <Gamepad className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/my-games")}>Mes jeux</a>
            </li>
            {/* <li> */}
              {/* <Server className="nav-fig" />
              <a href="#" onClick={() => this.redirection('/app_dev.php/my-profile')}>Mon profil</a> */}
            {/* </li> */}
            <li>
              <User className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.showInformations()}>{this.props.playerName}</a>
              {/* <a href="#" onClick={() => this.redirection('/app_dev.php/account')}>{this.props.playerName}</a> */}
            </li>
            <li>
              <Signout className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href={Routing.generate('logout')}>Déconnexion</a>
            </li>
          </ul>
          {this.state.showPlayerInformations ?
            <div className="showInformations">
              <ul>
                <li>
                  <Server className="nav-fig" />
                  {/* eslint-disable-next-line */}
                  <a href="#" onClick={() => this.redirection('/app_dev.php/my-profile')}>Mon profil</a>
                </li>
                <li>
                  <User className="nav-fig" />
                  {/* eslint-disable-next-line */}
                  <a href="#" onClick={() => this.redirection('/app_dev.php/account')}>Mon compte</a>
                </li>
              </ul>
            </div>
          : true}
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  actions: PropTypes.object.isRequired,
  playerName: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Navbar;

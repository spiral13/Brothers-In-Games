/**
 * Npm import
 */
import React from 'react';
import Gamepad from 'react-icons/lib/fa/gamepad';
import User from 'react-icons/lib/fa/user';
import Server from 'react-icons/lib/fa/server';
import Signout from 'react-icons/lib/fa/sign-out';
import Paper from 'react-icons/lib/fa/newspaper-o';
import Envelope from 'react-icons/lib/fa/envelope';
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
          <a href="#" onClick={() => this.redirection("/app_dev.php/games")}>Liste des jeux</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={() => this.redirection("/app_dev.php/announcements")}>Liste des annonces</a>
        </div>
        <nav id="nav-rubrique">
          <ul>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/message/receive")}><Envelope className="nav-fig" /> Mes messages</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/home")}><Paper className="nav-fig" />Mes annonces</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/my-games")}><Gamepad className="nav-fig" />Mes jeux</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.showInformations()}><User className="nav-fig" />{this.props.playerName}</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href={Routing.generate('logout')}><Signout className="nav-fig" />Déconnexion</a>
            </li>
          </ul>
          {this.state.showPlayerInformations ?
            <div className="showInformations">
              <ul>
                <li>
                  {/* eslint-disable-next-line */}
                  <a href="#" onClick={() => this.redirection('/app_dev.php/my-profile')}><Server className="nav-fig" />Mon profil</a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a href="#" onClick={() => this.redirection('/app_dev.php/account')}><User className="nav-fig" />Mon compte</a>
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

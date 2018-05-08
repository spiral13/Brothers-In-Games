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
import Select from 'react-select';
/**
* Local import
*/

/**
 * Code
 */
class Navbar extends React.Component {
  state = {
    showPlayerInformations: false,
    showAnnounce: false,
    createAnnounce: false,
    selectedOption: '',
  }

  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  showInformations = ({ target }) => {
    this.setState({ [target.id]: !this.state[target.id] });
  }

  handleSelectedOptionToSend = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.actions.changeFormGameSelectedForPost(selectedOption.value, selectedOption.id);
  }

  changeTextArea = ({ target }) => {
    this.props.actions.changeTextArea(target.value);
  }

  submit = (evt) => {
    evt.preventDefault();
    this.props.actions.submitAnnounce();
  }

  render() {
    const { selectedOption } = this.state;
    const { games } = this.props;
    let allOptions = [];
    games.map((option) => {
      allOptions = [...allOptions, { value: option.title, label: option.title, id: option.id }];
      return true;
    });
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
              <a href="#" id="showAnnounce" onClick={this.showInformations}>Mes annonces</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/my-games")}><Gamepad className="nav-fig" />Mes jeux</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" id="showPlayerInformations" onClick={this.showInformations}>{this.props.playerName}</a>
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
          {this.state.showAnnounce ?
            <div className="showInformations">
              <ul>
                <li>
                  <Server className="nav-fig" />
                  {/* eslint-disable-next-line */}
                  <a onClick={() => this.redirection("/app_dev.php/home")}>Mes annonces</a>
                </li>
                <li>
                  <User className="nav-fig" />
                  {/* eslint-disable-next-line */}
                  <a id="createAnnounce" onClick={this.showInformations}>Créer une annonce</a>
                </li>
              </ul>
            </div>
          : true }
          {this.state.createAnnounce ?
            <div className="createOneAnnounceAndPost">
              <form onSubmit={this.submit}>
                {/* Select */}
                <Select
                  className="createAnnounce-Select"
                  placeholder="Séléctionnez le jeu de l'annonce"
                  name="sidebar-input"
                  value={selectedOption}
                  onChange={this.handleSelectedOptionToSend}
                  options={allOptions}
                />
                <textarea
                  className="createAnnounce-textarea"
                  onChange={this.changeTextArea}
                  value={this.props.textArea}
                  placeholder="Message de l'annonce"
                />
                <button className="createAnnounce-button">Créer l'annonce</button>
              </form>
            </div>
          : true }
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  actions: PropTypes.object.isRequired,
  playerName: PropTypes.string.isRequired,
  games: PropTypes.object.isRequired,
  textArea: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Navbar;

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
          <a href="#" onClick={() => this.redirection("/app_dev.php/games")}>Les jeux</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={() => this.redirection("/app_dev.php/announcements")}>Les annonces</a>
        </div>
        <nav id="nav-rubrique">
          <ul>
            <li>
              <Envelope className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/message/receive")}>Mes messages</a>
            </li>
            <li>
              <Paper className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href="#" id="showAnnounce" onClick={this.showInformations}>Mes annonces</a>
            </li>
            <li>
              <Gamepad className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.redirection("/app_dev.php/my-games")}>Mes jeux</a>
            </li>
            <li>
              <User className="nav-fig" />
              {/* eslint-disable-next-line */}
              <a href="#" id="showPlayerInformations" onClick={this.showInformations}>{this.props.playerName}</a>
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
                  placeholder="Ajouter un nouveau jeu à votre liste"
                  name="sidebar-input"
                  value={selectedOption}
                  onChange={this.handleSelectedOptionToSend}
                  options={allOptions}
                />
                <textarea className="createAnnounce-textarea" onChange={this.changeTextArea} value={this.props.textArea} />
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

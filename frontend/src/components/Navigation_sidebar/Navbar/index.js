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
    showAnnounce: false,
    createAnnounce: false,
    selectedOption: '',
  }

  redirection = (value) => {
    if (window.location.pathname === value) {
      this.props.actions.redirect('/app_dev.php/redirection');
      setTimeout(() => {
        this.props.actions.redirect(value);
      }, 300);
    }
    else {
      this.props.actions.redirect(value);
    }
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
      <div>
        {this.state.createAnnounce ?
          <div className="createOneAnnounceAndPost">
            <form onSubmit={this.submit}>
              <fieldset>
                <legend>Créer une annonce</legend>
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
                <div className="createAnnounce-wrap">
                  <button className="createAnnounce-button">Annuler</button>
                  <button className="createAnnounce-button">Créer l'annonce</button>
                </div>
              </fieldset>
            </form>
          </div>
        : true }
        <div id="navbar">
          <div className="titles">
            {/* eslint-disable-next-line */}
            <a onClick={() => this.redirection("/app_dev.php/games")}>Liste des jeux</a>
            {/* eslint-disable-next-line */}
            <a onClick={() => this.redirection("/app_dev.php/announcements")}>Liste des annonces</a>
          </div>
          <nav id="nav-rubrique">
            <ul>
              <li>
                {/* eslint-disable-next-line */}
                <a onClick={() => this.redirection("/app_dev.php/message/receive")}><Envelope className="nav-fig" /> Mes messages</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a id="showAnnounce" onClick={this.showInformations}><Paper className="nav-fig" />Mes annonces</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a onClick={() => this.redirection("/app_dev.php/my-games")}><Gamepad className="nav-fig" />Mes jeux</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a onClick={() => this.redirection('/app_dev.php/my-profile')}><User className="nav-fig" />{this.props.playerName}</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href={Routing.generate('logout')}><Signout className="nav-fig" />Déconnexion</a>
              </li>
            </ul>
            {this.state.showAnnounce ?
              <div className="showInformations">
                <ul>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => this.redirection("/app_dev.php/my-announcements")}><Server className="nav-fig" />Mes annonces</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a id="createAnnounce" onClick={this.showInformations}><User className="nav-fig" />Créer une annonce</a>
                  </li>
                </ul>
              </div>
            : true }
          </nav>
        </div>
      </div>
    );
  }
}
Navbar.propTypes = {
  actions: PropTypes.object.isRequired,
  playerName: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired,
  textArea: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Navbar;

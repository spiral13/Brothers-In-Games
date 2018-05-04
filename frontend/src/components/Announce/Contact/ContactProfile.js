/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Game from 'frontend/src/components/GameList/Game';
/**
 * Code
 */
class ContactProfile extends React.Component {
  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  render() {
    return (
      <div className="showPlayerProfile">
        <h3>A propos du joueur</h3>
        <hr />
        <div className="playerContent">
          <img src={this.props.datas.user.profile.image} alt="Photo de profil" />
          <div className="personality">
            <h3>Nom du joueur:<span className="personality-player"> {this.props.datas.user.username}</span></h3>
            <h4>Âge:<span className="personality-player"> {this.props.datas.user.profile.birthdate}</span></h4>
            <h4>Genre:<span className="personality-player"> {this.props.datas.user.profile.gender}</span></h4>
            <h4>Spécialité:<span className="personality-player"> FPS, MMO</span></h4>
            <h4>Charactère:<span className="personality-player"> Brut de décoffrage</span></h4>
          </div>
          <div className="personalComment">
            <h3>Commentaire perso:</h3>
            <p>{this.props.datas.user.profile.description}</p>
          </div>
        </div>
        <h3>Joue à :</h3>
        <hr />
        <div className="gamesPlayed">
          {/* Mapper les jeux et les afficher */}
          {this.props.datas.user.games.map(data => <a onClick={() => this.redirection(`/app_dev.php/announcements?slug=${data.slug}`)}><Game game={data} /></a>)}
        </div>
      </div>
    );
  }
}
ContactProfile.propTypes = {
  datas: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default ContactProfile;

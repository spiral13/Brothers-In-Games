/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/

/**
 * Code
 */
const ContactProfile = ({ datas }) => (
  <div className="showPlayerProfile">
    <h3>A propos du joueur</h3>
    <hr />
    <div className="playerContent">
      <img src={datas.user.profile.image} alt="Photo de profil" />
      <div className="personality">
        <h3>Nom du joueur:<span className="personality-player"> {datas.user.username}</span></h3>
        <h4>Date de naissance:<span className="personality-player"> {datas.user.profile.birthdate.date}</span></h4>
        <h4>Genre:<span className="personality-player"> {datas.user.profile.gender}</span></h4>
        <h4>Spécialité:<span className="personality-player"> FPS, MMO</span></h4>
        <h4>Charactère:<span className="personality-player"> Brut de décoffrage</span></h4>
      </div>
      <div className="personalComment">
        <h3>Commentaire perso:</h3>
        <p>{datas.user.profile.description}</p>
      </div>
    </div>
    <h3>Joue à :</h3>
    <hr />
    <div className="gamesPlayed">
      {/* Mapper les jeux et les afficher */}
      <a href="#"><img src="#" />Un jeu</a>
    </div>
  </div>
);
ContactProfile.propTypes = {
  datas: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default ContactProfile;

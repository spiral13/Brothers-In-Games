/*
 * Npm import
 */
import React from 'react';
/**
* Local import
*/

/**
 * Code
 */
const ContactProfile = () => (
  <div className="showPlayerProfile">
    <h3>A propos du joueur</h3>
    <hr />
    <div className="playerContent">
      <image src="#" alt="Photo de profil" />
      <div className="personality">
        <h3>Nom du joueur<span className="personality-player"> id du joueur</span></h3>
        <h4>Âge:<span className="personality-player"> 18 ans</span></h4>
        <h4>Genre:<span className="personality-player"> Robot</span></h4>
        <h4>Spécialité:<span className="personality-player"> FPS, MMO</span></h4>
        <h4>Charactère:<span className="personality-player"> Brut de décoffrage</span></h4>
      </div>
      <div className="personalComment">
        <h3>Commentaire perso:</h3>
        <p>Lorem Ipsum ...</p>
      </div>
    </div>
    <h3>Joue à :</h3>
    <hr />
    <div className="gamesPlayed">
      {/* Mapper les jeux et les afficher */}
      <a href="#"><image src="#" />Un jeu</a>
    </div>
  </div>
);
/**
 * Export
 */
export default ContactProfile;

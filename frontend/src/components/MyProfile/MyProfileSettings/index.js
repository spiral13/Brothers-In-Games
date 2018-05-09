/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';

/**
* Local import
*/

/**
 * Code
 */
const MyProfileSettings = () => (
  <section id="settingsForMyProfile">
    <div id="changeYourInformation">Modifiez vos informations</div>
    <div id="photoUploader">  x Téléchargez votre photo de profil </div>
    <input
      id="inputFirstName"
      placeholder="Prénom"
    />

    <input
      id="inputFamilyName"
      placeholder="Nom"
    />

    <input
      id="inputNickName"
      placeholder="Surnom de ton avatar"
    />

    <input
      id="inputAge"
      placeholder="âge"
    />

  </section>
);

// Game.propTypes = {
//   game: PropTypes.object.isRequired,
// };


/**
 * Export
 */
export default MyProfileSettings;

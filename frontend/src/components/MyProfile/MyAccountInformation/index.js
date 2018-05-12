/**
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
const MyAccountInformation = ({ user }) => (
  <section id="MyAccountInformation">

    <span className="labelBasicInformation">Prénom: </span>
    <div
      className="BasicsInformation"
    >
      Polodu33Questcekiya!
    </div>

    <span className="labelBasicInformation">Pseudonyme: </span>
    <div
      className="BasicsInformation"
    >
      {user.username}
    </div>

    <span className="labelBasicInformation">Plat préféré: </span>
    <div
      className="BasicsInformation"
    >
      Grand amateur de chili corn carne!
    </div>

    <span className="labelBasicInformation">Jeu préféré: </span>
    <div
      className="BasicsInformation"
    >
      Just Dance
    </div>

    <span className="labelBasicInformation">Caractéristique: </span>
    <div
      className="BasicsInformation"
    >
      SerialKiller
    </div>

    <span className="labelBasicInformation">Signe astrologique: </span>
    <div
      className="BasicsInformation"
    >
      Sagittaire ascendant girafe
    </div>

    <span className="labelBasicInformation">Philosophie de vie: </span>
    <div
      className="BasicsInformation"
    >
      Qui pisse contre le vent se rince les dents
    </div>

    {/* <div id="mailProfile" className="BasicsInformation">{user.mail}</div>
    <div id="passwordProfile" className="BasicsInformation">{user.password}</div> */}
  </section>
);

MyAccountInformation.propTypes = {
  user: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default MyAccountInformation;

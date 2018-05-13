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

    <span className="labelBasicInformation">E-Mail: </span>
    <div
      className="BasicsInformation"
    >
      {user.mail}
    </div>

    <span className="labelBasicInformation">Mot de passe: </span>
    <div
      className="BasicsInformation"
    >
      {user.password}
    </div>

  </section>
);

MyAccountInformation.propTypes = {
  user: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default MyAccountInformation;

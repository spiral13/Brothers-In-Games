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
const MyAccountInformation = ({ account }) => (
  <section id="MyAccountInformation">

    <span className="labelBasicInformation">Username: </span>
    <div
      className="BasicsInformation"
    >
      {account.username}
    </div>
    <span className="labelBasicInformation">E-Mail: </span>
    <div
      className="BasicsInformation"
    >
      {account.mail}
    </div>

    <span className="labelBasicInformation">Mot de passe: </span>
    <div
      className="BasicsInformation"
    >
      ******
    </div>

  </section>
);

MyAccountInformation.propTypes = {
  account: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default MyAccountInformation;

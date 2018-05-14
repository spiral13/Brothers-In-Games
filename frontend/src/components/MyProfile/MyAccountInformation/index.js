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
      {account[0].username}
    </div>
    {console.log(account)}
    <span className="labelBasicInformation">E-Mail: </span>
    <div
      className="BasicsInformation"
    >
      {account[0].mail}
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
  user: PropTypes.object.isRequired,
  account: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

/**
 * Export
 */
export default MyAccountInformation;

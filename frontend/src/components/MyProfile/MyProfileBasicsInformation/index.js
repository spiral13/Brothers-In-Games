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
const MyProfileBasicsInformation = ({ user }) => (
  <section id="MyProfileBasicsInformation">

    <span className="labelBasicInformation">Prénom: </span>
    <div
      id="firstName"
      className="BasicsInformation"
    >
      {user[0].firstname}
    </div>

    <span className="labelBasicInformation">Pseudonyme: </span>
    <div
      className="BasicsInformation"
    >
      {user.username}
    </div>

    <span className="labelBasicInformation">Description: </span>
    <div
      className="BasicsInformation"
    >
      {user[0].description}
    </div>

    <span className="labelBasicInformation">Genre: </span>
    <div
      className="BasicsInformation"
    >
      {user[0].gender}
    </div>

    <span className="labelBasicInformation">Date de naissance: </span>
    <div
      className="BasicsInformation"
    >
      {user[0].birthdate.date}
    </div>

    {/* <div id="mailProfile" className="BasicsInformation">{user.mail}</div>
    <div id="passwordProfile" className="BasicsInformation">{user.password}</div> */}
  </section>
);

MyProfileBasicsInformation.propTypes = {
  user: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default MyProfileBasicsInformation;

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
    <div id="firstName" className="BasicsInformation">{user.username}</div>
    <div id="mailProfile" className="BasicsInformation">{user.mail}</div>
    <div id="passwordProfile" className="BasicsInformation">{user.password}</div>
    <div id="age" className="BasicsInformation">âge</div>
  </section>
);

MyProfileBasicsInformation.propTypes = {
  user: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default MyProfileBasicsInformation;

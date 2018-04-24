/**
 * Npm import
 */
import React from 'react';
/**
* Local import
*/

/**
 * Code
 */
const SignupForm = () => (
  <form className="signupForm" action="index.html" method="post">
    <label for="username">Username</label>
    <input id="username" type="text" name="username" value="" />
    <label for="newPassword">Password</label>
    <input id="newPassword" type="password" name="newPassword" value="" />
    <label for="confirmPassword">Confirm Password</label>
    <input id="confirmPassword" type="password" name="confirmPassword" value="" />
    <label for="email">Email</label>
    <input className="email" type="text" name="email" value="" />
    <label for="email">Confirm Email</label>
    <input className="email" type="text" name="confirmEmail" value="" />
    <button>Envoyer</button>
    {/* <button id="buttonSubmit" type="button" name="button">Envoyer</button> */}
  </form>
);
/**
 * Export
 */
export default SignupForm;

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
const SigninForm = () => (
  <form action="index.html" method="post">
    <label for="login">Login</label>
    <input id="login" type="text" name="login" value="" />
    <label for="password">Mot de passe</label>
    <input id="password" type="password" name="password" value="" />
    <a href="#" id="forgotPassword">Mot de passe perdu?</a>
    {/* <button id="buttonSubmit" type="button" name="button">Envoyer</button> */}
  </form>
);
/**
 * Export
 */
export default SigninForm;

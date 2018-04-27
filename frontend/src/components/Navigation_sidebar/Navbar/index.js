/**
 * Npm import
 */
import React from 'react';
import Gamepad from 'react-icons/lib/fa/gamepad';
import User from 'react-icons/lib/fa/user';
import Server from 'react-icons/lib/fa/server';
import Signout from 'react-icons/lib/fa/sign-out';
/**
* Local import
*/

/**
 * Code
 */
const Navbar = () => (
  <div id="navbar">
    {/* eslint-disable-next-line */}
    <h1><a href={Routing.generate('games_list')}>Les jeux</a></h1>
    <nav id="nav-rubrique">
      <ul>
        <li>
          <Gamepad className="nav-fig" />
          <a href="#">Mes jeux</a>
        </li>
        <li>
          <Server className="nav-fig" />
          <a href="#">Mon profil</a>
        </li>
        <li>
          <User className="nav-fig" />
          <a href="#">Mon compte</a>
        </li>
        <li>
          <Signout className="nav-fig" />
          {/* eslint-disable-next-line */}
          <a href={Routing.generate('logout')}>Déconnexion</a>
        </li>
      </ul>
    </nav>
  </div>
);
/**
 * Export
 */
export default Navbar;

/**
 * Npm import
 */
import React from 'react';
import Gamepad from 'react-icons/lib/fa/gamepad';
import User from 'react-icons/lib/fa/user';
import Server from 'react-icons/lib/fa/server';
import Signout from 'react-icons/lib/fa/sign-out';
import Paper from 'react-icons/lib/fa/newspaper-o';
/**
* Local import
*/

/**
 * Code
 */
const Navbar = () => (
  <div id="navbar">
    <div className="titles">
      {/* eslint-disable-next-line */}
      <a href={Routing.generate('games_list')}>Les jeux</a>
      {/* eslint-disable-next-line */}
      <a href={Routing.generate('announcements_list')}>Les annonces</a>
    </div>
    <nav id="nav-rubrique">
      <ul>
        <li>
          <Paper className="nav-fig" />
          {/* eslint-disable-next-line */}
          <a href="#">Mes annonces</a>
        </li>
        <li>
          <Gamepad className="nav-fig" />
          {/* eslint-disable-next-line */}
          <a href={Routing.generate('my_games')}>Mes jeux</a>
        </li>
        <li>
          <Server className="nav-fig" />
          {/* eslint-disable-next-line */}
          <a href={Routing.generate('my_profile_show')}>Mon profil</a>
        </li>
        <li>
          <User className="nav-fig" />
          {/* eslint-disable-next-line */}
          <a href={Routing.generate('account_show')}>Mon compte</a>
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

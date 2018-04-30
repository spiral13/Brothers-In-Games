/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Game from 'frontend/src/components/GameList/Game';
/**
 * Code
 */
const Main = ({ games }) => (
  <div id="games">
    {games.map((game, index) => (
      <a href={Routing.generate('announcements_list', { slug: 'league-of-legends' })}>
        <Game
          index={index}
          key={game.id}
          game={game}
        />
      </a>
    ))}
  </div>
);
Main.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/**
 * Export
 */
export default Main;

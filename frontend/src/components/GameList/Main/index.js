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
class Main extends React.Component {
  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  render() {
    return (
      <div id="games">
        {this.props.games.map((game, index) => (
          // <a href={Routing.generate('announcements_list', { slug: game.slug })}>
          <a key={`GameKeyInGameList${game.id}`} onClick={() => this.redirection(`/app_dev.php/announcements?slug=${game.slug}`)}>
            <Game
              index={index}
              key={game.id}
              game={game}
            />
          </a>
        ))}
      </div>
    );
  }
}
Main.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
/**
 * Export
 */
export default Main;

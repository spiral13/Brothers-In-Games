/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/components/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/components/Navigation_sidebar/Navbar';
import Game from 'frontend/src/components/GameList/Game';

/**
 * Code
 */

class GameList extends React.Component {
  static propTypes = {
    games: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  /*
   * Lifecycle
   */
  componentWillMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  /*
   * Rendu
   */
  render() {
    const { games } = this.props;
    return (
      <div id="gameList">
        <Navbar />
        <Sidebar />
        <main id="games">
          {games.map((game, index) => (
            <Game key={index} Game={Game} />
          ))}
         </main>
      </div>
    );
  }
}

/**
 * Export
 */
export default GameList;

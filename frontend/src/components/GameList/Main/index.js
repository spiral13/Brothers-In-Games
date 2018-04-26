/**
 * Npm import
 */
import React from 'react';

/**
* Local import
*/
// import Game from 'frontend/src/components/GameList/Game';
/**
 * Code
 */
class Main extends React.Component {
  render() {
    const { games } = this.props;
    console.log(games);
    return (
      <div id="games">
        {/* {games.map((game, index) => (
          <Game
            index={index}
            key={game.id}
            game={game}
          />
        ))} */}
      </div>
    );
  }
}

/**
 * Export
 */
export default Main;

/**
 * Npm import
 */
import React from 'react';
import classNames from 'classnames';
/**
* Local import
*/
import LastActu from 'frontend/src/components/HomeMember/LastActu';
/**
 * Code
 */
class RightSidebar extends React.Component {
  state = {
    currentBar: "actus-bar",
  }

  changeBar = ({ target }) => {
    this.setState({ currentBar: target.id });
  }

  render() {
    return (
      <div id="rightSidebar">
        <div id="rightBar-rubrique">
          <a
            id="actus-bar"
            href="#"
            className={classNames('bar',{"selected-bar": this.state.currentBar === 'actus-bar'})}
            onClick={this.changeBar}
          >
            Dernières actualités
          </a>
          <a
            id="player-bar"
            href="#"
            className={classNames('bar',{"selected-bar": this.state.currentBar === 'player-bar'})}
            onClick={this.changeBar}
          >
            Activités des joueurs
          </a>
        </div>
        {/* Faire un map et afficher toutes les dernières actus. */}
        {this.state.currentBar === "actus-bar" &&
        <div>
          <LastActu />
          <LastActu />
          <LastActu />
        </div>
        }
        {this.state.currentBar === "player-bar" && <LastActu />}
      </div>
    );
  }
}
/**
 * Export
 */
export default RightSidebar;

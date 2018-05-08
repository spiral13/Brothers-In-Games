/**
 * Npm import
 */
import React from 'react';
import classNames from 'classnames';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
/**
* Local import
*/
import LastActu from 'frontend/src/containers/HomeMember/LastActu';
/**
 * Code
 */
class RightSidebar extends React.Component {
  state = {
    currentBar: 'actus-bar',
  }

  changeBar = ({ target }) => {
    this.setState({ currentBar: target.id });
  }

  render() {
    const { actus, playerNews } = this.props;
    return (
      <div id="rightSidebar">
        <div id="rightSidebar-rubrique">
          <a
            id="actus-bar"
            href="#"
            className={classNames('bar', { 'selected-bar': this.state.currentBar === 'actus-bar' })}
            onClick={this.changeBar}
          >
            Dernières actualités
          </a>
          <a
            id="player-bar"
            href="#"
            className={classNames('bar', { 'selected-bar': this.state.currentBar === 'player-bar' })}
            onClick={this.changeBar}
          >
            Activités des joueurs
          </a>
        </div>
        <div>
          {this.state.currentBar === 'actus-bar' && (actus.map(newContent => (
            <LastActu
              key={newContent.id}
              type="article"
              id={newContent.id}
              title={newContent.title}
              image={newContent.image}
              slug={newContent.slug}
            />
          )))}
          {/* Filer l'activité des joueurs avec les dernières actus ? */}
          {this.state.currentBar === 'player-bar' && (playerNews.map(newContent => (
            <LastActu
              key={newContent[0].id}
              type="announcements"
              id={newContent[0].id}
              title={newContent.title}
              image={newContent.cover}
              slug={newContent.slug}
              username={newContent.username}
            />)))}
        </div>
      </div>
    );
  }
}

RightSidebar.propTypes = {
  actions: PropTypes.object.isRequired,
  actus: PropTypes.arrayOf(PropTypes.object.isRequired),
  playerNews: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/**
 * Export
 */
export default RightSidebar;

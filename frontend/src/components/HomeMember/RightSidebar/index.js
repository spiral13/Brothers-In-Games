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
import LastActu from 'frontend/src/components/HomeMember/LastActu';
/**
 * Code
 */
class RightSidebar extends React.Component {
  state = {
    loading: true,
    currentBar: 'actus-bar',
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    if (this.state.currentBar === 'actus-bar') {
      this.props.actions.getAllActus();
    // } else if {
      // this.props.actions.getAllPlayerActus();
    }
  }

  changeBar = ({ target }) => {
    this.setState({ currentBar: target.id });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="sidebar-loading">
          <ReactLoading
            type="cylon"
            color="#EC9C34"
          />;
        </div>
      );
    }
    const { actus } = this.props;
    return (
      <div id="rightSidebar">
        <div id="rightBar-rubrique">
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
          {this.state.currentBar === 'actus-bar' && (actus.map(newContent => <LastActu key={newContent.id} title={newContent.title} image={newContent.image} />))}
          {/* Filer l'activité des joueurs avec les dernières actus ? */}
          {/* {this.state.currentBar === "player-bar" && (actus.map((newContent) => <LastActu key={newContent.id} title={newContent.title} image={newContent.image} />))} */}
        </div>
      </div>
    );
  }
}

RightSidebar.propTypes = {
  actions: PropTypes.object.isRequired,
  actus: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/**
 * Export
 */
export default RightSidebar;

/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Main from 'frontend/src/containers/GameList/Main';
import Loading from 'frontend/src/components/Loading';

/**
 * Code
 */

class GameList extends React.Component {
  state = {
    loading: true,
  }

  /*
   * Lifecycle
   */
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
    this.props.actions.getAllGames();
    this.props.actions.getAllFriends();
  }

  /*
   * Rendu
   */
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="gameList">
        <Sidebar />
        <div className="right-side">
          <Navbar />
          <Main />
        </div>
      </div>
    );
  }
}
GameList.propTypes = {
  actions: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default GameList;

/*
 * Npm import
 */
import React from 'react';

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

  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  state = {
    loading: true,
  }

  /*
   * Lifecycle
   */
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    this.props.actions.getAllGames();
  }

  /*
   * Rendu
   */
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    else {
      return (
        <div className="gameList">
          <Navbar />
          <Sidebar />
          <Main />
        </div>
      );
    }
  }
}


/**
 * Export
 */
export default GameList;

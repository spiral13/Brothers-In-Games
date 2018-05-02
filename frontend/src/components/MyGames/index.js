/*
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
// import Main from 'frontend/src/components/MyGames/Main';
import Loading from 'frontend/src/components/Loading';

/**
 * Code
 */

class MyGames extends React.Component {
  // mise en place d'un state pour un petit loading
  // pour laisser le temps au serveur de répondre
  state = {
    loading: true,
  }

  // /*
  //  * Lifecycle
  //  */
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
    // this.props.actions.getAllMyGames();
  }

  /*
   * Rendu
   */
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="MyGamesList">
        <Navbar />
        <Sidebar />
        <div id="ContainerMyGamesList">

          <div id="infoIdentityProfile">
            <img id="photoProfileOnMyGames" src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Toto" />
            <h1 id="profileNameOnMyGames">Liste de jeux de Toto</h1>
          </div>

          <section id="sectionListingMyGames">
            <div id="settings">
              <h2 id="title">Vos jeux</h2>
              <div id="triggerLegend">Ajouter un nouveau jeu à votre liste</div>
              <span id="trigger"> + </span>
            </div>
            <div id="triggeredAddOneGameForm">
              <form id="addOneGameForm">
                <input
                  type="text"
                  placeholder="Ajouter un nouveau jeu à votre liste"
                />
              </form>
            </div>

            <div id="MyGames">
              <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="titre du jeu" id="oneOfMyGamePicture" />
              <h2 id="oneOfMyGameTitle">titre du jeu</h2>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

// GameList.propTypes = {
//   actions: PropTypes.object.isRequired,
// };

/**
 * Export
 */
export default MyGames;

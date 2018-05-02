/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';

/**
* Local import
*/
import AddOneGameForm from 'frontend/src/components/MyGames/AddOneGameForm';
/**
 * Code
 */
class Main extends React.PureComponent {
   state = {
     isClicked: false,
   }

   render() {
     return (
       <div id="ContainerMyGamesList">

         <div id="infoIdentityProfile">
           <img id="photoProfileOnMyGames" src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Toto" />
           <h1 id="profileNameOnMyGames">Liste de jeux de Toto</h1>
         </div>

         <section id="sectionListingMyGames">
           <div id="settings">
             <h2 id="title">Vos jeux</h2>
             <div id="triggerLegend">Ajouter un nouveau jeu à votre liste</div>
             <a
               id="trigger"
               onClick={() => this.setState({ isClicked: !this.state.isClicked })}
             > +
             </a>
           </div>

           {this.state.isClicked &&
           <div id="triggeredAddOneGameForm" className={this.state.isClick ? 'fadeIn' : 'fadeOut'}>
             <AddOneGameForm />
           </div>}

           <div id="containerAllMyGames">
             <div id="oneOfMyGame">
               <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="titre du jeu" id="oneOfMyGamePicture" />
               <h2 id="oneOfMyGameTitle">titre du jeu</h2>
             </div>
           </div>
         </section>
       </div>
     );
   }
}
// Main.propTypes = {
//   games: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
// };
/**
 * Export
 */
export default Main;

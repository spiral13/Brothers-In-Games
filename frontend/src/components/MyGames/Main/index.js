/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
* Local import
*/

// eslint-disable-next-line
import AddOneGameForm from 'frontend/src/containers/MyGames/AddOneGameForm';
import OneOfMyGames from 'frontend/src/components/MyGames/OneOfMyGames';
// eslint-disable-next-line
// import GameList from 'frontend/src/containers/GameList/GameList';

/**
 * Code
 */
class Main extends React.PureComponent {
   state = {
     isClicked: false,
   }

   render() {
     const { mygames } = this.props;
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
             {mygames.map((mygame, index) => (
               // <a href={Routing.generate('games_list', { id: mygame.id, slug: mygame.slug })}>
               //   <OneOfMyGames
               //     index={index}
               //     key={mygame.id}
               //     mygame={mygame}
               //   />
               // </a>
               <OneOfMyGames
                 // index={index}
                 key={index}
                 mygame={mygame}
               />
             ))}
           </div>

         </section>
       </div>
     );
   }
}
Main.propTypes = {
  mygames: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/**
 * Export
 */
export default Main;

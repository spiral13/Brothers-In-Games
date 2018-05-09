/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import MdCancel from 'react-icons/lib/md/cancel';

/**
* Local import
*/

// eslint-disable-next-line
import AddOneGameForm from 'frontend/src/containers/MyGames/AddOneGameForm';
import DeleteGameForm from 'frontend/src/containers/MyGames/DeleteGameForm';
import OneOfMyGames from 'frontend/src/components/MyGames/OneOfMyGames';
// eslint-disable-next-line
// import GameList from 'frontend/src/containers/GameList/GameList';

/**
 * Code
 */
class Main extends React.PureComponent {
   state = {
     AddFormIsClicked: false,
     DeleteFormIsClicked: false,
   }
   redirection = (value) => {
     this.props.actions.redirect(value);
   }

  /*
  * Lifecycle
  */
   // componentDidMount() {
   //   setTimeout(() => {
   //     this.props.actions.addAllMyGames();
   //   }, 2000);
   // }

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

             <div className="trigger" >
               <div className="triggerLegend">Ajouter un nouveau jeu à votre liste</div>
               <a
                 id="addTrigger"
                 onClick={() =>
                   this.setState({ AddFormIsClicked: !this.state.AddFormIsClicked })}
               > <FaPlusCircle />
               </a>
             </div>

             <div className="trigger">
               <div className="triggerLegend">Supprimer un jeu de votre liste</div>
               <a
                 id="deleteTrigger"
                 onClick={() =>
                   this.setState({ DeleteFormIsClicked: !this.state.DeleteFormIsClicked })}
               > <FaTrashO />
               </a>
             </div>
           </div>

           {this.state.AddFormIsClicked &&
           <div id="triggeredAddOneGameForm" className={this.state.AddFormIsClicked ? 'fadeIn' : 'fadeOut'}>
             <AddOneGameForm />
           </div>}

           {this.state.DeleteFormIsClicked &&
           <div id="triggeredDeleteGameForm">
             <MdCancel
               onClick={() =>
                 this.setState({ DeleteFormIsClicked: !this.state.DeleteFormIsClicked })}
               id="crossCancelDeleteForm"
             />
             <span id="labelDeleteGameForm">Quel jeu voulez-vous supprimer de votre liste ?</span>
             <DeleteGameForm />
           </div>}

           <div id="containerAllMyGames">
             {mygames.map(mygame => (
               <a key={`MyGamesKey${mygame.id}`} onClick={() => this.redirection(`/app_dev.php/announcements?slug=${mygame.slug}`)}>
                 <OneOfMyGames
                   key={mygame.index}
                   mygame={mygame}
                 />
               </a>
             ))}
           </div>

         </section>
       </div>
     );
   }
}
Main.propTypes = {
  mygames: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Main;

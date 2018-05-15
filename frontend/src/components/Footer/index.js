/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/

/**
 * Code
 */
class Footer extends React.Component {
   redirection = (value) => {
     if (window.location.pathname === value) {
       this.props.actions.redirect('/redirection');
       setTimeout(() => {
         this.props.actions.redirect(value);
       }, 300);
     }
     else {
       this.props.actions.redirect(value);
     }
   }
   render() {
     return (
       <div id="footer">
         <div id="footerAllLinks">
           <div id="footerTitle">
             <a onClick={() => this.redirection('/home')}>
             Brothers<br /><span><i>in</i>Games</span>
             </a>
           </div>
           <div id="linkToMandatoryPages">
             {/* eslint-disable-next-line */}
             <a className="linkToFooterPage" onClick={() => this.redirection("/contact")}>Nous contacter</a>
             {/* eslint-disable-next-line */}
             <a className="linkToFooterPage" onClick={() => this.redirection("/CGU")}>C.G.U.</a>
             {/* eslint-disable-next-line */}
             <a className="linkToFooterPage" onClick={() => this.redirection("/legal-mention")}>Informations légales</a>
           </div>
         </div>
         <div id="copyright">
           <p>
            Le site internet BrothersInGame et tous les noms associés sont la propriété de ses créateurs.
            Copyright © 2018 BrothersInGame. Tous droits réservés.
           </p>
         </div>
       </div>
     );
   }
}
Footer.propTypes = {
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Footer;

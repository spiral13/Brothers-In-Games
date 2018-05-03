/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Friends from 'frontend/src/containers/Navigation_sidebar/Friends';
import Loading from 'frontend/src/components/Loading';
/**
 * Code
 */
class Sidebar extends React.Component {
  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  render() {
    return (
      <div id="sidebar">
        <h1 id="sidebar-title">
          <a href="#" onClick={() => this.redirection('/app_dev.php/home')}>
            Brothers<br /><span><i>in</i>Games</span>
          </a>
        </h1>
        <h2 id="sidebar-username">Robert Gudule</h2>
        <form id="sidebar-form">
          <label id="sidebar-label" htmlFor="sidebar-input">Chercher un jeu / ami</label>
          <input id="sidebar-input" type="text" value="" placeholder="Recherche de joueurs/jeux" />
        </form>
        <Friends />
      </div>
    );
  }
}
Sidebar.propTypes = {
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Sidebar;

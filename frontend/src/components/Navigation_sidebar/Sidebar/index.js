/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaSearch from 'react-icons/lib/fa/search';

/**
* Local import
*/
import Friends from 'frontend/src/containers/Navigation_sidebar/Friends';
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
        <div id="sidebar-wrap">
          <h1 id="sidebar-title">
            <a href="#" onClick={() => this.redirection('/app_dev.php/home')}>
              Brothers<br /><span><i>in</i>Games</span>
            </a>
          </h1>
          <form id="sidebar-form">
            <label id="sidebar-label" htmlFor="sidebar-input">Chercher un jeu</label>
            <div id="sidebar-form-wrap">
              <input id="sidebar-input" type="text" value="" placeholder="Rechercher un jeu" />
              <button><FaSearch /></button>
            </div>
          </form>
          <Friends />
        </div>
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

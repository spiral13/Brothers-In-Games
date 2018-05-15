/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaSearch from 'react-icons/lib/fa/search';
import Select from 'react-select';
/**
* Local import
*/
import Friends from 'frontend/src/containers/Navigation_sidebar/Friends';
/**
 * Code
 */
class Sidebar extends React.Component {
  state = {
    selectedOption: '',
  }

  handleSelectedOptionToSend = (selectedOption) => {
    this.setState({ selectedOption });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.redirection('/announcement');
    setTimeout(() => {
      this.redirection(`/announcements?slug=${this.state.selectedOption.slug}`);
    }, 500);
  }

  redirection = (value) => {
    this.props.actions.redirect(value);
  }

  render() {
    const { selectedOption } = this.state;
    const { games } = this.props;
    let allOptions = [];
    games.map((option) => {
      allOptions = [...allOptions, { value: option.title, label: option.title, slug: option.slug }];
      return true;
    });
    return (
      <div id="sidebar">
        <div id="sidebar-wrap">
          <h1 id="sidebar-title">
            <a href="#" onClick={() => this.redirection('/home')}>
              Brothers<br /><span><i>in</i>Games</span>
            </a>
          </h1>
          <form id="sidebar-form" onSubmit={this.handleSubmit}>
            <div id="sidebar-label" htmlFor="sidebar-input">Rechercher des annonces</div>
            <div id="sidebar-form-wrap">
              <Select
                className="selectNavGame"
                placeholder="Tapez le nom d'un jeu ici."
                name="sidebar-input"
                value={selectedOption}
                onChange={this.handleSelectedOptionToSend}
                options={allOptions}
              />
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
  games: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Sidebar;

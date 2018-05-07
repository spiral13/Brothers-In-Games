/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
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
    this.redirection('/app_dev.php/announcement');
    setTimeout(() => {
      this.redirection(`/app_dev.php/announcements?slug=${this.state.selectedOption.slug}`);
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
        <h1 id="sidebar-title">
          <a href="#" onClick={() => this.redirection('/app_dev.php/home')}>
            Brothers<br /><span><i>in</i>Games</span>
          </a>
        </h1>
        <form id="sidebar-form" onSubmit={this.handleSubmit}>
          <label id="sidebar-label" htmlFor="sidebar-input">Chercher un jeu</label>
          <Select
            className="selectNavGame"
            placeholder="Ajouter un nouveau jeu à votre liste"
            name="sidebar-input"
            value={selectedOption}
            onChange={this.handleSelectedOptionToSend}
            options={allOptions}
          />
          <button>Rechercher</button>
        </form>
        <Friends />
      </div>
    );
  }
}
Sidebar.propTypes = {
  actions: PropTypes.object.isRequired,
  games: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Sidebar;

/**
 * Npm import
 */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

/**
* Local import
*/

/**
 * Code
 */
class AddOneGameForm extends React.Component {
  state = {
    selectedOption: '',
  }

  handleSelectedOptionToSend = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.actions.changeFormGameSelected(selectedOption.label, selectedOption.id);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.submitSelectedGame();
  }

  render() {
    const { selectedOption } = this.state;
    const { games } = this.props;
    let allOptions = [];
    games.map((option) => {
      allOptions = [...allOptions, { value: option.title, label: option.title, id: option.id }];
      return true;
    });
    return (
      <form id="addOneGameForm" onSubmit={this.handleSubmit}>
        <Select
          placeholder="Ajouter un nouveau jeu à votre liste"
          id="inputaddOneGameForm"
          name="form-field-name"
          value={selectedOption}
          onChange={this.handleSelectedOptionToSend}
          options={allOptions}
        />
        <button id="addOneGameButton">Envoyer</button>
      </form>
    );
  }
}

AddOneGameForm.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  actions: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default AddOneGameForm;

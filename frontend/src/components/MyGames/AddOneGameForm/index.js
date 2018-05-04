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

  handleChange = (selectedOption) => {
    // this.setState({ selectedOption });
    this.props.actions.selectedOption();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    // this.props.actions.submit();
  }

  render() {
    const { selectedOption } = this.state;
    const { games } = this.props;
    let allOptions = [];
    games.map((option) => {
      allOptions = [...allOptions, { value: option.title, label: option.title }];
      return true;
    });
    return (
      <form id="addOneGameForm" onSubmit={this.handleSubmit}>
        <Select
          placeholder="Ajouter un nouveau jeu à votre liste"
          id="inputaddOneGameForm"
          name="form-field-name"
          value={selectedOption}
          onChange={this.handleChange}
          options={allOptions}
        />
        <button>Envoyer</button>
      </form>
    );
  }
}

AddOneGameForm.propTypes = {
  games: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
};


/**
 * Export
 */
export default AddOneGameForm;

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
class DeleteGameForm extends React.Component {
  state = {
    selectedOptionToDelete: '',
  }

  handleSelectedOptionToDelete = (selectedOptionToDelete) => {
    this.setState({ selectedOptionToDelete });
    this.props.actions.changeFormGameToDelete(
      selectedOptionToDelete.label,
      selectedOptionToDelete.id,
    );
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.submitGameToDelete();
  }

  render() {
    const { selectedOptionToDelete } = this.state;
    const { mygames } = this.props;
    let allOptions = [];
    mygames.map((option) => {
      allOptions = [...allOptions, { value: option.title, label: option.title, id: option.id }];
      return true;
    });
    return (
      <form id="deleteOneGameForm" onSubmit={this.handleSubmit}>
        <Select
          placeholder="Supprimer un jeu de votre liste"
          id="inputDeleteOneGameForm"
          name="form-field-name"
          value={selectedOptionToDelete}
          onChange={this.handleSelectedOptionToDelete}
          options={allOptions}
        />
        <button id="deleteOneGameButton">Envoyer</button>
      </form>
    );
  }
}

DeleteGameForm.propTypes = {
  mygames: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
  actions: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default DeleteGameForm;

/**
 * Npm import
 */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.title}`);
  }
  render() {
    const { selectedOption } = this.state;
    const { games } = this.props;
    let tab = [];
    const AllOptions = games.filter((game) => {
      // tab = { ...game.title };
      return ({ ...game.title });
    });
    console.log(tab);
    // console.log(games.filter(game => game.title));
    // console.log(AllOptions);
    return (
      <form id="addOneGameForm">
        <Select
          type="text"
          placeholder="Ajouter un nouveau jeu à votre liste"
          id="inputaddOneGameForm"
          name="form-field-name"
          value={selectedOption}
          onChange={this.handleChange}
          // options={[...AllOptions]}
          options={[
            {
              value: AllOptions[0].title,
              label: AllOptions[0].title,
            },
          ]}
        />
      </form>
    );
  }
}

AddOneGameForm.propTypes = {
  games: PropTypes.arrayOf(PropTypes.objectOf((PropTypes.string.isRequired)).isRequired).isRequired,
};


/**
 * Export
 */
export default AddOneGameForm;

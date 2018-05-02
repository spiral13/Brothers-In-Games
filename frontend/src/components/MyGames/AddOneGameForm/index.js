/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


/**
* Local import
*/

/**
 * Code
 */
const AddOneGameForm = () => (
  <form id="addOneGameForm">
    <input
      type="text"
      placeholder="Ajouter un nouveau jeu à votre liste"
      id="inputaddOneGameForm"
    />
  </form>
);

// AddOneGameForm.propTypes = {
//   game: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
// };


/**
 * Export
 */
export default AddOneGameForm;

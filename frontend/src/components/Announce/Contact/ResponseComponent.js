/*
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
class ResponseComponent extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.getResponse();
  }

  changeArea = ({ target }) => {
    this.props.actions.changeArea(target.value);
  }

  render() {
    return (
      <div id="responseComponent">
        <form className="responseComponent-form" onSubmit={this.onSubmit}>
          <textarea className="responseComponent-textarea" placeholder="Répondre à l'annonce" value={this.props.textareaValue} onChange={this.changeArea} />
          <button className="responseComponent-button">Envoyer</button>
        </form>
      </div>
    );
  }
}
ResponseComponent.propTypes = {
  textareaValue: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
/**
 * Export
 */
export default ResponseComponent;

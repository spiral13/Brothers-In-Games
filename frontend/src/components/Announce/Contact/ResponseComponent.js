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
  componentDidMount() {
    this.props.actions.sendByMail(this.props.id);
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.getResponse();
  }

  onSubmitByMessage = (evt) => {
    evt.preventDefault();
    this.props.actions.submitByMail();
  }

  changeArea = ({ target }) => {
    this.props.actions.changeArea(target.value);
  }


  render() {
    return (
      <div id="responseComponent">
        {this.props.id !== -1 ?
          <form id="responseComponent-form" onSubmit={this.onSubmitByMessage}>
            <textarea id="responseComponent-textarea" className="message announcement" placeholder="Répondre à l'annonce" value={this.props.textareaValue} onChange={this.changeArea} />
            <button id="responseComponent-button">Envoyer</button>
          </form>
          :
          <form id="responseComponent-form" onSubmit={this.onSubmit}>
            <textarea id="responseComponent-textarea" className="message announcement" placeholder="Répondre à l'annonce" value={this.props.textareaValue} onChange={this.changeArea} />
            <button id="responseComponent-button">Envoyer</button>
          </form>
        }
      </div>
    );
  }
}
ResponseComponent.propTypes = {
  textareaValue: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  id: PropTypes.number,
};

ResponseComponent.defaultProps = {
  id: -1,
};
/**
 * Export
 */
export default ResponseComponent;

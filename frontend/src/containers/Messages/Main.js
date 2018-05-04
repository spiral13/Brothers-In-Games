/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Main from 'frontend/src/components/Messages/ReceiveMessages/Main';
/**
 * Code
 */

const mapStateToProps = state => ({
  messages: state.MessagesReducer.receivedMails,
});

const mapDispatchToProps = () => ({});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default MainContainer;

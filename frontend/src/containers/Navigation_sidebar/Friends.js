/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Friends from 'frontend/src/components/Navigation_sidebar/Friends';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  datas: state.FriendsReducer.friend,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

/**
 * Export
 */
export default FriendsContainer;

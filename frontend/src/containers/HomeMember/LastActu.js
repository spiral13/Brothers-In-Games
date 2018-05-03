/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import LastActu from 'frontend/src/components/HomeMember/LastActu';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = (state, ownProps) => ({
  type: ownProps.type,
  id: ownProps.id,
  title: ownProps.title,
  image: ownProps.image,
  slug: ownProps.slug,
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const LastActuContainer = connect(mapStateToProps, mapDispatchToProps)(LastActu);

/**
 * Export
 */
export default LastActuContainer;

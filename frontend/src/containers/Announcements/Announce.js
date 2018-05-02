/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import Announce from 'frontend/src/components/Announcements/Announce';
import { redirect } from 'frontend/src/store/reducer';
/**
 * Code
 */

const mapStateToProps = (state, ownProps) => ({
  username: ownProps.username,
  id: ownProps.id,
  title: ownProps.title,
  image: ownProps.image,
  slug: ownProps.slug,
  content: ownProps.content,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ redirect }, dispatch),
});

const AnnounceContainer = connect(mapStateToProps, mapDispatchToProps)(Announce);

/**
 * Export
 */
export default AnnounceContainer;

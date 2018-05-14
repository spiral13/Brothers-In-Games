/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
* Local import
*/
import ContactUs from 'frontend/src/components/Contact';
import { getAllNews, getAllActus, getAllGames } from 'frontend/src/store/reducer';
import { getAllFriends } from 'frontend/src/store/reducers/FriendsReducer';
import { addAnnouncements } from 'frontend/src/store/reducers/AnnouncementsReducer';
/**
 * Code
 */

const mapStateToProps = state => ({
  loadings: state.LoadingReducer.loadings,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getAllNews,
    getAllFriends,
    getAllActus,
    addAnnouncements,
    getAllGames,
  }, dispatch),
});

const ContactUsContainer = connect(mapStateToProps, mapDispatchToProps)(ContactUs);

/**
 * Export
 */
export default ContactUsContainer;

/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
* Local import
*/
import Sidebar from 'frontend/src/containers/Navigation_sidebar/Sidebar';
import Navbar from 'frontend/src/containers/Navigation_sidebar/Navbar';
import Loading from 'frontend/src/components/Loading';
import Footer from 'frontend/src/containers/Footer';
import Main from 'frontend/src/components/Contact/Main';
/**
 * Code
 */
class ContactUs extends React.Component {
  componentDidMount() {
    this.props.actions.getAllFriends();
    this.props.actions.getAllGames();
    this.props.actions.getAllNews();
    this.props.actions.getAllActus();
    this.props.actions.addAnnouncements();
  }

  render() {
    const {
      loadingFriends,
      loadingGames,
      loadingNews,
      loadingActus,
    } = this.props.loadings;
    if (!loadingFriends || !loadingGames || !loadingNews || !loadingActus) {
      return <Loading />;
    }
    return (
      <div id="contactUs">
        <Sidebar />
        <div className="right-side">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

ContactUs.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

/**
 * Export
 */
export default ContactUs;

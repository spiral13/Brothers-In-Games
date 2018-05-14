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
import RightSidebar from 'frontend/src/containers/HomeMember/RightSidebar';
import Loading from 'frontend/src/components/Loading';
/**
 * Code
 */
class LegalInformation extends React.Component {
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
      <div id="homeMember">
        <Sidebar />
        <div id="homeMember-rightSide">
          <Navbar />
          <div id="homeMember-rightSide-body">
            <div id="LegalInformation"> Info légales</div>
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

LegalInformation.propTypes = {
  actions: PropTypes.object.isRequired,
  loadings: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

/**
 * Export
 */
export default LegalInformation;

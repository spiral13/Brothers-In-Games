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
import Main from 'frontend/src/containers/HomeMember/Main';
import RightSidebar from 'frontend/src/containers/HomeMember/RightSidebar';
import Loading from 'frontend/src/components/Loading';
/**
 * Code
 */
class HomeMember extends React.Component {
  state = {
    loading: true,
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
    this.props.actions.getAllFriends();
    this.props.actions.getAllNews();
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div id="homeMember">
        <Sidebar />
        <div id="homeMember-rightSide">
          <Navbar />
          <div id="homeMember-rightSide-body">
            <Main />
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

HomeMember.propTypes = {
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default HomeMember;

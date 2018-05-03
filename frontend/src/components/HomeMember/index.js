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
    }, 1000);
    this.props.actions.getAllFriends();
    this.props.actions.getAllNews();
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div id="homeMember">
        <Navbar />
        <Sidebar />
        <Main />
        <RightSidebar />
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
